module.exports = {
  name: "tv",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1036144578690031726/1037765163127935016/tv.mp4"],
      embeds: [{
        "title": "TV installation guide",
        "description": "You can read this page to get an idea on how to install cs3 app and repos on TV.",
        "url": "https://rentry.org/cs3tv",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1016716040648015972/1036940396317638757/l9_1.png"
        }
      }]
    })
  },
};