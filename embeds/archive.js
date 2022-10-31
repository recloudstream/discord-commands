const axios = require("axios");
class AsyncConstructor {
    constructor(value) {
    return (async () => {
		var data = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream-archive/git/trees/master"))?.data?.tree || []
		var currentAvailableCommits = data.filter(x=>x.path.endsWith(".apk")).map(x => x.path)
		var commits = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream/commits"))?.data?.slice(0, 15) || []
		var fields = commits.filter(x => currentAvailableCommits.includes(`${x.sha.slice(0, 7)}.apk`)).map((commit, idx) => {
			var name = commit.sha.slice(0, 7)
			if(idx === 0) name = name + " **(Latest)**"
			return {
				"name": name,
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
