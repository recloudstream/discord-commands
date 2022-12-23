module.exports = {
  name: "sun",
  async execute(message) {
    message.channel.send({
       embeds: [{
 "title": "SunStream",
      "description": "Sunstream is a Cloudstream fork which solely focuses on simplicity. It uses TMDB as a base for metadata and collects all of the best extensions and puts them into one. This has many benefits, such as not having a cluttered extensions list and saves you from switching between many different extensions all the time.",
      "url": "https://github.com/Sarlay/SunStream/",
      "color": 16740352,
      "thumbnail": {
        "url": "https://media.discordapp.net/attachments/1031959782430625843/1054738132924371004/IMG_20221220_123212.png"
      }
    },
    {
      "description": "Some features that are coming soon include a remote control to control your tv, and access to your self-hosted jellyfin server",
      "color": 16740352
    },
    {
      "description": "[**Join Sunstream's support server**](https://discord.gg/eewncBN4Xh) if you have any issue or query about the app.",
      "color": 16740352,
      "footer": {
        "text": "Fork by Sarlay#4782",
        "icon_url": "https://cdn.discordapp.com/avatars/384801300543438871/78a00ec35bc93ee3a45b3dadfc512468.webp?size=512"
      }
      }]
    })
  },
};
