const axios = require("axios")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
        var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
        .map(async json=> {
	    var name = (await axios.get(json.url ?? json)).data.name
            if(json.verified) return "  <:verified:1027693463573114903> " + name + " :\n[Install](" + json.url + ")"
            else return name + ":\n[Install](" + json + ")"
        })
        this.embeds = [{
            "title": "Cloudstream Repositories",
            "description": `${repos.join("\n\n")} \n\n`,
			
            "color": 1381909
        }]
        return this;
        })();
    }
}
module.exports = new AsyncConstructor()
