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
      }]
    })
  },
};
