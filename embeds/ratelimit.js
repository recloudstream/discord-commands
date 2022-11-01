const axios = require("axios");
class AsyncConstructor {
	constructor(value) {
		return (async () => {
			let data = (await axios.get("https://api.github.com/rate_limit"))?.data
			var fields = Object.values(data.resources).map(it => {return { // js grammar is bad 
				name: it.resource,
				value: `${it.remaining}/${it.limit} (reset @ <t:${it.reset}:R>)`,
				inline: false
			}})
			
			this.embeds = [
				{
					"title": "Gitub API Rate limit remaining",
					"color": 16746328,
					"fields": fields
				}
			]
			return this;
		})();
	}
}
module.exports = new AsyncConstructor()
