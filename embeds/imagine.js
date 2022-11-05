const axios = require("axios");
const cheerio = require("cheerio");

class AsyncConstructor {
	constructor(args) {
        this.args = args
		return (async (inputs) => {
            let prompt = inputs.join(" ")
            let data = (await axios.post("https://stable-diffusion-nft-minter.glitch.me/", "prompt="+encodeURIComponent(prompt).replace(/%20/g, "+"))).data
            let $ = cheerio.load(data)
            let img = $('.content img').first().attr('src')
            this.content = img || "Couldn't generate the image <:cri:906496612749168661>. Please wait like a few seconds."
            return this
        })(args);
	}
}

module.exports = AsyncConstructor
