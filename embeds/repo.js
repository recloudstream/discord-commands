const axios = require("axios")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
	var arrayRepos = []
        var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
	for (const repo in repos) {
	    var json = repos[repo]
	    var name = (await axios.get(json.url ?? json)).data.name
	    if(json.verified) arrayRepos.push(" <:verified:1027693463573114903> " + name + " :\n[Install](" + json.url + ")")
            else arrayRepos.push(name + ":\n[Install](" + json + ")")
	}
        this.embeds = [{
            "title": "Cloudstream Repositories",
            "description": `${arrayRepos.join("\n\n")}\n`,
            "color": 1381909
        }]
        return this;
        })();
    }
}
module.exports = new AsyncConstructor()
