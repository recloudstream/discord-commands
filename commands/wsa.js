module.exports = {
  name: "wsa",
  async execute(message) {
    message.channel.send({
      //files: ["https://cdn.discordapp.com/attachments/737724143570780260/1031100838212538388/wsa.mp4"],
      embeds: [{
        "title": "CS3 on Windows 11 installation guide",
        "description": "You can read this page to get the idea how to install cs3 app on Windows 11 using WSA.",
        "url": "https://discord.com/channels/737724143126052974/1055348198320902175/1055348205430259732",
        "color": 1083392,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png"
        }
      }]
    })
  },
};
