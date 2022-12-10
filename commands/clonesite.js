module.exports = {
  name: "clonesite",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/737724143570780260/1051167275018891374/cloning.mp4"],
      embeds: [{
       "title": "Cloning a site",
      "description": "**1.** A name (completely arbitrary, this is what will be displayed in the app)\n**2.** The clone site URL\n**3.** A two letter [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (this will dictate how the site is displayed and sorted within the app, just enter **en** if you are unsure)",
      "color": 16711680
      }]
    })
  },
};
