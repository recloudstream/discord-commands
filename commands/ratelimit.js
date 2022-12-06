const axios = require("axios");
module.exports = {
	name: "ratelimit",
	async execute(message) {
		let data = (await axios.get("https://api.github.com/rate_limit"))?.data
		var fields = Object.values(data.resources).map(it => {
			return { // js grammar is bad 
				name: it.resource,
				value: `${it.remaining}/${it.limit} (reset @ <t:${it.reset}:R>)`,
				inline: false
			}
		})
		message.channel.send({
			embeds: [
				{
					"title": "Github API Rate limit remaining",
					"color": 16746328,
					"fields": fields
				}
			]
		})
	},
};