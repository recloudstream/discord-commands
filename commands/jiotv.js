
module.exports = {
  name: "jiotv",
  async execute(message) {
    message.channel.send({
      embeds: [{
"title": "Watch JioTV from various sources",
      "description": "Install [Darkdemon repo](https://l.cloudstream.cf/dir_drepo) or use **drepo** for manual installation. You will get **JioTV** in the extension list.\n\n⚠️ Some sources may have geo restriction. Use **VPN with Indian server** to access them. Or try other sources.",
      "color": 11928580,
      "thumbnail": {
        "url": "https://camo.githubusercontent.com/5b58926e20a8f81e421e88807670c2539ae8f52e6532ffe80eb46456d32a6cde/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38612f4a696f5f54565f6c6f676f2e7376672f3132303070782d4a696f5f54565f6c6f676f2e7376672e706e67"
      }
      }]
    })
  },
};
