const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			var attachment = message.attachments.first()
			if (!attachment?.url) return this;
			var data = (await axios.get("https://api.trace.moe/search?url=" + attachment?.url)).data
			this.content = ""
			var firstResult = data?.result[0]
			this.embeds = [{
				"title": "Anilist",
				"description": firstResult.filename,
				"url": `https://anilist.co/anime/${firstResult.anilist}`,
				"color": null,
				"fields": [
					{
						"name": "Episode",
						"value": firstResult.episode ?? "Unknown",
						"inline": true
					},
					{
						"name": "From/To",
						"value": `${firstResult.from}/${firstResult.to}`,
						"inline": true
					}
				],
				"image": {
				  "url": firstResult.image
				}
			}]
			message.channel.send({files: [firstResult.video]})
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor