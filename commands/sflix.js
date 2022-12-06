module.exports = {
  name: "sflix",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
      "title": "Sflix.to is now available in Sorastream.",
      "description": "The standalone sflix extension in English repo is broken amd there is no eta. But there is an API for sflix.to in Sorastream. You can find the Sflix servers as **Upcloud** and **Vidcloud**.\n\nBut use other sources like UHD, Gdrive movies, HDmoviebox, Uniquestream to get better qualities.",
      "color": 370579,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1015131233824538624/1049671048800518154/UzT2h5G.png"
      }
      },
      {
        "title": "Try these sources",
        "description": "1. Super stream [English](https://cs.repo/?raw.githubusercontent.com/recloudstream/cloudstream-extensions/builds/repo.json)\n2. Sora stream [Hexated](https://cs.repo/?raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/builds/repo.json)\n3. Loklok [Hexated](https://cs.repo/?raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/builds/repo.json)\n4. Ask4movies [English](https://cs.repo/?raw.githubusercontent.com/recloudstream/cloudstream-extensions/builds/repo.json)\n5. Olgply [English](https://cs.repo/?raw.githubusercontent.com/recloudstream/cloudstream-extensions/builds/repo.json)",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/emojis/888951267873923093.webp?size=128&quality=lossless"
        }
      }]
    })
  },
};
