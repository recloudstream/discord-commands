const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			var attachment = message.attachments.first()
			if (!attachment?.url) return this;
			var data = (await axios.get("https://api.trace.moe/search?anilistInfo&url=" + attachment?.url)).data
			this.content = ""
			var result = data?.result[0]
			this.content = "Woah, found nsfw stuff."
			if(result.anilist.isAdult == true) return this
			this.content = ""
			this.embeds = [{
				"title": result.anilist?.title?.english ?? "Unknown",
				"description": result.filename ?? "",
				"url": `https://anilist.co/anime/${result.anilist.id}`,
				"color": null,
				"fields": [
					{
						"name": "Episode",
						"value": result.episode ?? "Unknown",
						"inline": true
					},
					{
						"name": "From/To",
						"value": `${result.from ?? "Unknown"}/${result.to ?? "Unknown"}`,
						"inline": true
					}

				],
				"image": {
				  "url": result.image
				},
				"footer": {
				  "text": `This is ${Math.round(result.similarity * 100)}% similar to the image`
			      }
			}]
			this.files = [result.video]
                        this.allowedChannels = ["737729263221997619", "851217659395571712"]
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor
