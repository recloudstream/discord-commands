module.exports = {
  name: "ola",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Olamovies is unfixable right now",
        "description": "This source is an **unfinished source and catalogue only**. The source is unfixable right now. So don't use and report about the source.",
        "color": 16765696,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1035159969332478035/1047902926984720474/9DlbfMc.png"
        }
      }]
    })
  },
};
