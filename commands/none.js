module.exports = {
  name: "none",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Click none and select your source.",
        "color": 16711680,
        "image": {
          "url": "https://media.discordapp.net/attachments/737724143570780260/1050724486955151370/image.png"
        }
      }]
    })
  },
};
