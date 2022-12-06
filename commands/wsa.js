module.exports = {
  name: "wsa",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/737724143570780260/1031100838212538388/wsa.mp4"],
      embeds: [{
        "title": "CS3 on Windows 11 installation guide",
        "description": "You can read this page to get the idea how to install cs3 app on Windows 11 using WSA.",
        "url": "https://rentry.org/wsa",
        "color": 1083392,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png"
        }
      },
      {
        "title": "You must \"Always Allow\" this! Otherwise, you'll have to do the whole process again.",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1013281939026890793/1041630060702085160/allow.png"
        }

      }]
    })
  },
};