module.exports = {
  name: "trakt",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1008654622740729897/1040472652541853726/trakt.mp4"],
      embeds: [{
        "title": "How to use trakt list through stremio",
        "description": "The Stremio extension is still experimental. Don't expect a stremio like experience. Most of the public stremio sources are torrent based but cloudstream doesn't support torrent stream. So, none of the popular sources will work here.\n\n**The trakt example is link only and it will not play any video. Also, this trakt doesn't sync anything.**",
        "url": "https://rentry.org/trakt",
        "color": 13828096,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1040473552371060766/trakt-icon-red-white.png"
        }

      }]
    })
  },
};