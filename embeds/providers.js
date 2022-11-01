const axios = require("axios")
class AsyncConstructor {
	constructor(value) {
		return (async () => {
			var allEmbeds = []
			var repo_db = [];
			if (value && value.startsWith("https://")) {
			    	var repo_db = [value]
			} else {
				var repo_db = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
			}
			for (const repo in repo_db) {
				var repoPlugins = []
				var RepoResponse = (await axios.get(repo_db[repo].url ?? repo_db[repo])).data
				for (const pluginUrl in RepoResponse.pluginLists) {
					(await axios.get(RepoResponse.pluginLists[pluginUrl])).data
						.forEach(data => {
							repoPlugins.push(data)
						})
				}
				var repoEmbed = {
					"title": RepoResponse.name,
					"description": repoPlugins.map(it => `**${it.internalName.replace("Provider", "")}**`).join(", "),
					"url": repo_db[repo].url ?? repo_db[repo],
					"color": 7232090,
					"footer": {
					    "text": "Plugins in this repository: " + repoPlugins.length
					}
				};
				allEmbeds.push(repoEmbed)
			}
			this.embeds = allEmbeds
			return this;
		})();
	}
}
module.exports = new AsyncConstructor()
