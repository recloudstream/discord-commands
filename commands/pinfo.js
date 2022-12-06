const axios = require("axios");
const requireFromString = require('require-from-string');
const { getLanguage } = require("language-flag-colors");
const { createHash } = require("crypto");
function hash(url) {
    return createHash("sha256")
        .update(url + "#funny-salt")
        .digest("hex");
}
module.exports = {
    name: "pinfo",
    async execute(message, inputs) {
        try {
            let repoId = inputs?.at(0)
            let pluginId = inputs?.at(1)
            if (!repoId) return message.channel.send("U need to add something to the command dummy, repo and plugin name");
            let file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
            let repo = requireFromString(file.code).find(it => it?.name === repoId || it?.shortcut === repoId)?.raw_url
            if (!repo && repoId.indexOf("http") === -1) return message.channel.send("No repo found");
            let repoResponse = repo && (await axios.get(repo, {
                headers: {
                    'accept-encoding': 'null'
                }
            })).data;
            let repoPlugins = []
            for (const pluginUrl of repoResponse?.pluginLists || []) {
                if (!pluginUrl || !pluginUrl.startsWith("http")) continue;
                (await axios.get(pluginUrl, {
                    headers: {
                        'accept-encoding': 'null'
                    }
                })).data.forEach((data) => {
                    repoPlugins.push(data);
                });
            }
            let plugin = repoPlugins?.find(it =>
                it?.name.toLowerCase().includes(pluginId.toLowerCase()) ||
                it?.internalName.toLowerCase().includes(pluginId.toLowerCase())
            )
            let url = "https://api.countapi.xyz/info/cs3-votes/" + hash(plugin?.url || repoId);
            let countResponse = (await axios.get(url)).data;
            if (!countResponse) {
                this.content = "No such a plugin like this."
                return this;
            }
            let fields = [
                {
                    "name": "Created",
                    "value": `<t:${Math.round(countResponse.created / 1000)}:R>`,
                    "inline": true
                },
                {
                    "name": "TTL",
                    "value": `<t:${Math.round((new Date().getTime() + countResponse.ttl) / 1000)}:R>`,
                    "inline": true
                },
            ];
            ["Value", "Update Lowerbound", "Update Upperbound"].forEach(it => {
                fields.push({
                    "name": it.replace("Value", "Votes"),
                    "value": `${countResponse[it.toLowerCase().replace(/\s/g, "_")]}`,
                    "inline": true
                })
            });
            fields = fields || []
            if (plugin) {
                fields.push(
                    {
                        "name": "Version",
                        "value": plugin.version,
                        "inline": true
                    },
                    {
                        "name": "Size",
                        "value": plugin.fileSize / 1000 + " KB",
                        "inline": true
                    },
                    {
                        "name": "Language",
                        "value": getLanguage(plugin.language ?? "none")?.flag?.emoji ?? "🏳️",
                        "inline": true
                    },
                    {
                        "name": "Types",
                        "value": plugin?.tvTypes?.join(", ") || "Unknown",
                        "inline": true
                    },
                    {
                        "name": "Authors",
                        "value": plugin?.authors?.join(", ") || "Unknown",
                        "inline": true
                    },
                    {
                        "name": "Repository",
                        "value": `<cloudstreamrepo://${repo.replace("https://", "")}>`,
                        "inline": true
                    },
                    {
                        "name": "Raw Download",
                        "value": `[Download](${plugin.url})`,
                        "inline": true
                    }
                )
            }
            message.channel.send({
                embeds: [
                    {
                        "title": plugin?.name?.replace("Provider", "") || "Extension",
                        fields,
                        "thumbnail": {
                            "url": plugin?.iconUrl?.replaceAll("%size%", "128") ?? "https://cdn0.iconfinder.com/data/icons/file-management-system-flat/32/file_managemenr_system_icon_set_flat_style-14-512.png"
                        }
                    }
                ]
            })
        } catch (err) {
            message.channel.send("Something went wrong.")
        }
    },
};
