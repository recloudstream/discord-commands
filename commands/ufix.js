module.exports = {
  name: "ufix",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "url": "https://github.com/recloudstream/cloudstream",
        "title": "Fix it yourself.",
        "color": 16364910,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/835622152270118953/1027883881724137552/source.png"
        }
      }]
    })
  },
};