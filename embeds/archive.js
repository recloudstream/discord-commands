const axios = require("axios");
const cheerio = require("cheerio");
class AsyncConstructor {
    constructor(value) {
    return (async () => {
		var data = (await axios.get("https://github.com/recloudstream/cloudstream-archive")).data
		var $ = cheerio.load(data)
		var currentAvailableCommits = []
		$("a:contains(.apk)").each(function() {
			currentAvailableCommits.push($(this).text().replace(".apk", ""))
		})
		var commits = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream/commits")).data.slice(0, 10)
		var fields = commits.filter(function(x) {                                
			return currentAvailableCommits.includes(x.sha.slice(0, 7))
		}).map(commit=> {
			var name = commit.sha.slice(0, 7)
			if(commit.sha.slice(0, 7) == commits[0].sha.slice(0, 7)) name = name + " (Latest)"
			return {
				"name": name,
				"value": `[${commit.sha.slice(0, 7) + ".apk"}](${"https://github.com" + $(`a:contains(${commit.sha.slice(0, 7)}.apk)`).attr("href").replace("blob", "raw")})\n${commit.commit.message}`,
				"inline": true
			}
		})
		this.embeds = [
			{
				"title": "Cloudstream Archive",
				"url": "https://github.com/recloudstream/cloudstream-archive",
				"color": null,
				"fields": fields
			}
		]
        return this;
        })();
		}
}
module.exports = new AsyncConstructor()