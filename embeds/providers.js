const axios = require("axios");
const { createHash } = require("crypto");
function hash(url) {
	return createHash("sha256")
		.update(url + "#funny-salt")
		.digest("hex");
}
class AsyncConstructor {
	constructor(args) {
		this.args = args;
		return (async (inputs) => {
			var allEmbeds = [];
			var repo_db = [];
			var allowedAlias = ["eng", "multi", "arab", "hexa", "drepo", "likrepo", "nsfw"]
			if(inputs?.length > 0) {
				if(allowedAlias.includes(inputs[0])) {
					repo_db = [`https://l.cloudstream.cf/${inputs[0]}`];
				} else if (inputs[0].startsWith("http")) {
					repo_db = [inputs[0]];
				}
			} else {
				repo_db = (
					await axios.get(
						"https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json"
					)
				).data;
			}
			console.log(repo_db)
			for (const repo of repo_db) {
				if (!repo) continue;
				var repoPlugins = [];
				var RepoResponse = (await axios.get(repo.url || repo)).data;
				for (const pluginUrl of RepoResponse.pluginLists) {
					if (!pluginUrl || !pluginUrl.startsWith("http")) continue;
					(await axios.get(pluginUrl)).data.forEach((data) => {
						repoPlugins.push(data);
					});
				}
				var pluginsList;
				if (inputs?.length > 0 && inputs[0].startsWith("http") || allowedAlias.includes(inputs[0])) {
					pluginsList = await Promise.all(
						repoPlugins.map(async (it) => {
							var voteUrl =
								"https://api.countapi.xyz/get/cs3-votes/" + hash(it.url);
							var voteCount = (await axios.get(voteUrl))?.data?.value;
							if (voteCount >= 0)
								voteCount = voteCount + " <:upvote:1037335398759809094>";
							else voteCount = voteCount + " <:downvote:1037335394787790908>";
							var status;
							if (it.status == 1) status = "🟢";
							else if (it.status == 2) status = "🟡";
							else if (it.status == 3) status = "🟠";
							else status = "🔴";
							return `**${status} ${it.internalName.replace(
								"Provider",
								""
							)} ( ${voteCount} )**`;
						})
					);
				} else {
					pluginsList = repoPlugins.map(it => {
						var status;
						if (it.status == 1) status = "🟢"; else if (it.status == 2) status = "🟡"; else if (it.status == 3) status = "🟠"; else status = "🔴"
						return `**${status} ${it.internalName.replace("Provider", "")}**`
					})
				}
				var repoEmbed = {
					title: RepoResponse.name,
					description: pluginsList.join("\n"),
					url: repo.url || repo,
					color: 7232090,
					footer: {
						text: "Plugins in this repository: " + repoPlugins.length,
					},
				};
				allEmbeds.push(repoEmbed);
			}
			this.embeds = allEmbeds;
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor;