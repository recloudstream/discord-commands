module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Preferred Media",
      "description": "Go to **Cloudstream → Settings → Providers  → Preferred Media**, select the required extension types and press **apply**.",
      "color": null,
      "image": {
        "url": "https://media.discordapp.net/attachments/1044322950725259274/1066062103544340530/i3Insx0.png"
      }
            }]
        })
    },
};
