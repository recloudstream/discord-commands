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
            let fields = ["Created", "TTL"].map(it => ({
                "name": it,
                "value": `<t:${countResponse[it.toLowerCase()]}:R>`,
                "inline": false
            }))
            ["Value", "Update Lowerbound", "Update Upperbound"].map(it => fields.push({
                "name": it,
                "value": `Value ${countResponse[it.toLowerCase().replace(/\s/g, "_")]}`,
                "inline": false
            }))
            console.log(fields);
            fields = fields || []
            this.embeds = [
                {
                    "title": "VoteAPI entry info",
                    "fields": fields
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
