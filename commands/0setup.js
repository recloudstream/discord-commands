module.exports = {
    name: "duckling",
    onlyUsers: ["777478477569196044", "326466810150912000"],
    async execute(message) {
        message.channel.send({
        files: ["https://media.discordapp.net/attachments/737724143570780260/1049346871946117173/cs3start.mp4"],
      embeds: [{
        "description": "**Step 1:** Download and install the [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk).\n**Step 2:** Install the [repositories](https://cloudstream.cf/repos).\n\n **Don't install all the plugins from a repo without knowing**",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1036209801803333632/1036609641636962334/unknown.png"
        }
      }]
        })
    },
};