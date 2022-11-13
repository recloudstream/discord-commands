const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			console.log(message.attachments[0])
			if(!message.attachments[0]?.url) return this;
			var data = (await axios.get("https://api.trace.moe/search?url=" + message.attachments[0].url)).data
			this.content = "File: " + message.attachments[0].url ?? "None"
			console.log(data)
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor
