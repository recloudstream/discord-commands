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
            this.content = img
            return this
		})(args);
	}
}

module.exports = AsyncConstructor