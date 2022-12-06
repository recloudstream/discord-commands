module.exports = {
  name: "sflix",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
      "title": "Sflix.to is now available in Sorastream.",
      "description": "The standalone sflix extension in English repo is broken. But there is an API for sflix.to in Sorastream. **Upcloud** and **Vidcloud** are the Sflix.to servers which are available in the source list.\n\nBut use other sources like UHD, Gdrive movies, HDmoviebox, Uniquestream to get better qualities.",
      "color": 370579,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1015131233824538624/1049671048800518154/UzT2h5G.png"
      }
      }]
    })
  },
};
