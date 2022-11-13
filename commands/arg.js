const axios = require("axios");
class AsyncConstructor {
	constructor(args, message) {
		return (async () => {
			this.content = "No image.";
			if(!message.attachments[0]?.proxyURL) return this;
			var data = (await axios.get("https://api.trace.moe/search?url=" + message.attachments[0].proxyURL)).data
			this.content = "File: " + message.attachments[0].proxyURL ?? "None"
			console.log(data)
			return this;
		})(args);
	}
}

module.exports = AsyncConstructor
