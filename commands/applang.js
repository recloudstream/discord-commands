module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Change App Language",
      "description": "Go to **Cloudstream → General → App Language** and change the app language.",
      "color": null,
      "image": {
        "url": "https://media.discordapp.net/attachments/1047169440246136832/1072483646252003429/fpw5ycD.png"
      }
            }]
        })
    },
};
