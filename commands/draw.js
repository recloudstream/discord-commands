const {drawImage} = require("./src/utils/drawImage.js")

class AsyncConstructor {
	constructor(args, msg) {
            this.args = args
            return (async (inputs) => {
                if (msg.channel.id === "737729263221997619") {
                    let prompt = inputs.join(" ")
                    let resp = await drawImage(prompt)
                    this.content = resp?.content
                    this.files = resp?.files
		        }
                this.allowedChannels = ["737729263221997619"]
                return this
            })(args);
	}
}

module.exports = AsyncConstructor
