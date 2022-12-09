module.exports = {
  name: "sora",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1015131233824538624/1050689200158162974/sorainstall.mp4"],
      embeds: [{
        "title": "Sorastream",
        "description": "Sorastream is a MultiAPI based source that scrapes **A LOT** of sites and uses TMDb for catalogue.",
        "color": 11485,
        "thumbnail": {
          "url": "https://raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/master/SoraStream/Icon.png"
        }
      },
      {
        "title": "FAQ",
        "description": "**1. The episode loading is taking too long**\nAs it scrapes a lot of sites, it takes time to load all of them. Skip loading after 3-5 seconds.\n**2. Some sources are not loading**\nSora has some geo restricted sources. Use a VPN to access those sources.\n**3. Some titles are showing \"No links found\"**\nSora uses TMDb for catalogue, not the sources. So, it may show titles that no site has.",
        "color": 11485
      }]
    })
  },
};
