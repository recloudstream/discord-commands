module.exports = {
  name: "pr",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "The Pull Request feature is free for all <:verycoo:888951267873923093>",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1016716040648015972/1037344275681247372/pr.png"
        }
      }]
    })
  },
};