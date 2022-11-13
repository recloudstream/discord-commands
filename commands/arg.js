const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			var attachment = message.attachments.first()
			if (!attachment?.url) return this;
			var data = (await axios.get("https://api.trace.moe/search?url=" + attachment?.url)).data
			this.content = ""
			this.embeds = [data.result?.map(json => {
				return {
					"title": "Anilist",
					"description": json.filename,
					"url": `https://anilist.co/anime/${json.anilist}`,
					"color": null,
					"fields": [
						{
							"name": "Episode",
							"value": json.episode,
							"inline": true
						},
						{
							"name": "From/To",
							"value": `${json.from}/${json.to}`,
							"inline": true
						}
					]
				}
			})]
			message.channel.send({files: [data?.result[0].video]})
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor