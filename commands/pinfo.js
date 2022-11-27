const axios = require("axios");
const requireFromString = require('require-from-string');
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
            if (!repoId || !pluginId) {
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
            let plugin = repoPlugins?.find(it => it?.name.includes(pluginId) || it?.internalName.includes(pluginId))
            let url = "https://api.countapi.xyz/info/cs3-votes/" + hash(plugin?.url || repoId);
            let countResponse = (await axios.get(url)).data;
            let fields = [];
            ["Created", "TTL"].forEach(it => {
                fields.push({
                "name": it,
                "value": `<t:${countResponse[it.toLowerCase()]}:R>`,
                "inline": true
                })
            });
            ["Value", "Update Lowerbound", "Update Upperbound"].forEach(it => {
                fields.push({
                    "name": it.replace("Value", "Votes"),
                    "value": `${countResponse[it.toLowerCase().replace(/\s/g, "_")]}`,
                    "inline": true
                })
            });
            console.log(fields);
            fields = fields || []
            this.embeds = [
                {
                    "title": plugin.internalName.replace("Provider", ""),
                    "fields": fields
                    .concat([
                        {
                            "name": "Plugin Size",
                            "value": plugin.fileSize / 1000 + " KB",
                            "inline": true
                        },
                        {
                            "name": "Plugin Language",
                            "value": plugin.language,
                            "inline": true
                        },
                        {
                            "name": "Plugin Types",
                            "value": plugin.tvTypes.join(", "),
                            "inline": true
                        },
                        {
                            "name": "Plugin Repository",
                            "value": plugin.repositoryUrl,
                            "inline": true
                        }
                    ]),
                    "thumbnail": {
                        "url": plugin.iconUrl ?? "https://cdn0.iconfinder.com/data/icons/file-management-system-flat/32/file_managemenr_system_icon_set_flat_style-14-512.png"
                    }
                }
            ]
            return this;
        } catch(err) {
            this.content = err.message
            return this;
        }
        })(args);
    }
}
module.exports = AsyncConstructor
