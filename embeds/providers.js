const axios = require("axios")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
        const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
		);
		var allList = []
		var repo_db = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
		for (const repo in repo_db) {
		  var repoUrl = repo_db[repo].url ?? repo_db[repo]
		  var pluginsResponseUrls = (await axios.get(repoUrl)).data
		  for (const pluginUrl in pluginsResponseUrls.pluginLists) {
			  (await axios.get(pluginsResponseUrls.pluginLists[pluginUrl])).data
			  .forEach(data=> 
			  {
				allList.push(data)  
			  })
		  }
		}
		var allEmbeds = []
		chunk(allList, 30).forEach(data=> {
			allEmbeds.push({
			"description": data.map(it=> `${it.internalName.replace("Provider", "")}`).join(", "),
			"color": null
		})
		})
        this.embeds = allEmbeds
        return this;
        })();
    }
}
module.exports = new AsyncConstructor()