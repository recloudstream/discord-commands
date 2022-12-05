module.exports = {
  name: "ola",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Olamovies is still Beta",
        "description": "This source is an **unfinished source and catalogue only** at this moment. Likdev is busy with his study. So don't use and report about the source.",
        "color": 16765696,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1035159969332478035/1047902926984720474/9DlbfMc.png"
        }
      }]
    })
  },
};