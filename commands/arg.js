const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			var attachment = message.attachments.first()
			if(!attachment?.url) return this;
			var data = (await axios.get("https://api.trace.moe/search?url=" + attachment?.url)).data
			this.content = "File: " + attachment?.url ?? "None"
			console.log(data)
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor
