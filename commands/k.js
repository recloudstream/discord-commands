module.exports = {
  name: "k",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{

        "title": "Known issue.",
        "color": 16711680,
        "image": {
          "url": "https://www.meme-arsenal.com/memes/e37e86d33dbdc95cbd233f36d8a1a0b2.jpg"
        }
      }]
    })
  },
};