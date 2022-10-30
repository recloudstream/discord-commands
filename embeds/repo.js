const axios = require("axios")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
        var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
        .map(json=> {
            if(json.verified) return "  <:verified:1027693463573114903> " + json.url.split("/")[4] + " :\n[Install](" + json.url + ")"
            else return json.split("/")[4] + ":\n[Install](" + json + ")"
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
