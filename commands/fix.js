module.exports = {
  name: "fix",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Troubleshooting",
        "description": "You can read this page to get the idea how to fix your posted issue.",
        "url": "https://discord.com/channels/737724143126052974/1055362005193740389/1055362007840325643",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1016716040648015972/1036940396317638757/l9_1.png"
        }
      }]
    })
  },
};
