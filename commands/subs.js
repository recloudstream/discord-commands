module.exports = {
  name: "subs",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Subtitles guide",
        "description": "You can read this page to get an idea on how to use all the common subtitle functions in the app.",
        "url": "https://rentry.org/cs3sub",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1040168844318216202/subtitles.png"
        }
      }]
    })
  },
};