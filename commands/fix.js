module.exports = {
  name: "fix",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Troubleshooting",
        "description": "You can read this page to get the idea how to fix your posted issue.",
        "url": "https://rentry.org/cs3fix",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1016716040648015972/1036940396317638757/l9_1.png"
        }
      }]
    })
  },
};
