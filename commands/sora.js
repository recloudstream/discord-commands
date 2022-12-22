module.exports = {
  name: "sora",
  async execute(message) {
    message.channel.send({
      //files: ["https://cdn.discordapp.com/attachments/1047169440246136832/1050693497780437034/howtoinstallsora.mp4"],
      embeds: [{
            "title": "Sorastream",
      "description": "Sorastream is a MultiAPI based source that scrapes **A LOT of FHD and 4K** sites and uses TMDb for catalogue.\n\n[**Click here**](https://discord.com/channels/737724143126052974/1055438609643221012/1055438612596015145) to get the **installation guide and FAQ.**",
      "color": 468479,
      "thumbnail": {
        "url": "https://images-ext-1.discordapp.net/external/1nGBtYNveL_7kDK785oBsJY3dcKFFPUTZfAo0ZM7F4U/https/raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/master/SoraStream/Icon.png"
      }
      }]
    })
  },
};
