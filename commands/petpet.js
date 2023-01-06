const axios = require("axios");
module.exports = {
	name: "petpet",
	async execute(message) {
		let user = message.mentions.users.first()
		if (user == undefined) user = message.author
		let data = await axios.get(`https://petpet-api.clit.repl.co/petpet?url=https:%2f%2fcdn.discordapp.com%2favatars%2f${user.id}%2f${user.avatar}.png`)
		let img = data?.result ?: `https://api.obamabot.me/v1/image/petpet?avatar=https:%2f%2fcdn.discordapp.com%2favatars%2f${user.id}%2f${user.avatar}.png`
		message.channel.send({
			files: [img]
		})
	},
};
