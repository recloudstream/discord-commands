class Constructor {
	constructor(args, msg) {
		return (() => {
			if (msg.mention.length < 1) return;
			let user = msg.mentions[0]
			this.content = `https://api.obamabot.me/v1/image/petpet?avatar=https:%2f%2fcdn.discordapp.com%2favatars%2f${user.id}%2f${user.avatar}.png`
			return this;
		})();
	}
}
module.exports = Constructor
