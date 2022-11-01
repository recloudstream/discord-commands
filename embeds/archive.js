const axios = require("axios");
function timestamp(year, month, day, hour, minute, second){
 var datum = new Date(Date.UTC(year, month, day, hour, minute, second))
 return datum.getTime()/1000
}
class AsyncConstructor {
	constructor(value) {
		return (async () => {
			var data = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream-archive/git/trees/master"))?.data?.tree || []
			var currentAvailableCommits = data.filter(x => x.path.endsWith(".apk")).map(x => x.path)
			var commits = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream/commits"))?.data?.slice(0, 15) || []
			var fields = commits.filter(x => currentAvailableCommits.includes(`${x.sha.slice(0, 7)}.apk`)).map((commit, idx) => {
				var name = commit.sha.slice(0, 7)
				var time = new Date(commit.commit.author.date)
				var tstamp = timestamp(time.getUTCFullYear(), time.getUTCMonth(), time.getUTCDate(), time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds())
				if (idx === 0) name = name + " **(Latest)**"
				return {
					"name": name + `\n <t:${tstamp}:R>`,
					"value": `[${commit.sha.slice(0, 7) + ".apk"}](https://github.com/recloudstream/cloudstream-archive/raw/master/${commit.sha.slice(0, 7)}.apk)\n${commit.commit.message}`,
					"inline": true
				}
			})
			this.embeds = [
				{
					"title": "Cloudstream Archive",
					"url": "https://github.com/recloudstream/cloudstream-archive",
					"color": 8612179,
					"fields": fields
				}
			]
			return this;
		})();
	}
}
module.exports = new AsyncConstructor()
