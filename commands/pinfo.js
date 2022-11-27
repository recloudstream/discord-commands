const axios = require("axios");
const requireFromString = require('require-from-string');
const { getLanguage } = require("language-flag-colors");
const { createHash } = require("crypto");
function hash(url) {
    return createHash("sha256")
        .update(url + "#funny-salt")
        .digest("hex");
}

class AsyncConstructor {
    constructor(args) {
        return (async (inputs) => {
            try {
            let repoId = inputs?.at(0)
            let pluginId = inputs?.at(1)
            if (!repoId) {
                this.content = "U need to add something to the command dummy, repo and plugin name"
                return this;
            }
            let file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
            let repo = requireFromString(file.code).find(it => it?.name === repoId || it?.shortcut === repoId)?.raw_url
            if (!repo && repoId.indexOf("http") === -1) {
                this.content = "No repo found"
                return this;
            }
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
                    "value": `<t:${Math.round(countResponse.created/1000)}:R>`,
                    "inline": true
                },
                {
                    "name": "TTL",
                    "value": `<t:${Math.round((new Date().getTime()+countResponse.ttl)/1000)}:R>`,
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
                            "value": `[Repository](${plugin.repositoryUrl})`,
                            "inline": true
                        },
                        {
                            "name": "Download URL",
                            "value": `[Download](${plugin.url})`,
                            "inline": true
                        }
                    )
            }
            this.embeds = [
                {
                    "title": plugin?.name?.replace("Provider", "")||"Extension",
                    fields,
                    "thumbnail": {
                        "url": plugin?.iconUrl?.replaceAll("%size%", "128") ?? "https://cdn0.iconfinder.com/data/icons/file-management-system-flat/32/file_managemenr_system_icon_set_flat_style-14-512.png"
                    }
                }
            ]
            return this;
        } catch(err) {
            this.content = "Something went wrong."
            return this;
        }
        })(args);
    }
}
module.exports = AsyncConstructor
