module.exports = {
  name: "logcat",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Where is the logcat?",
        "description": "To get logcat go to **cs3 > Settings > Updates and backup > Show logcat🐈**",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1015131233824538624/1037037596318105690/unknown.png"
        }
      }]
    })
  },
};
