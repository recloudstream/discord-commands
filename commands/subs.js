module.exports = {
  name: "subs",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Subtitles guide",
        "description": "You can read this page to get an idea on how to use all the common subtitle functions in the app.",
        "url": "https://discord.com/channels/737724143126052974/1055349163396706445/1055349167939141672",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1040168844318216202/subtitles.png"
        }
      }]
    })
  },
};
