module.exports = {
  name: "none",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Click none and select your source.",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/737729263221997619/1034390187372982343/none.png"
        }
      }]
    })
  },
};
