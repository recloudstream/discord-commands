module.exports = {
  name: "egy",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Egybest is always broken. Use other sources.",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1036144578690031726/1036241544799338506/sketch-1667043229468.png"
        }
      }]
    })
  },
};