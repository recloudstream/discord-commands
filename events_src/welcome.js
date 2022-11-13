const sendDm = require("./src/utils/sendDm.js")

module.exports = function main(member){
    sendDm(member, {
      embeds: [{
        "title": "Welcome to the Lagrapps server!",
        "color": 16711680
      }]
    })
    sendDm(member, {
      files: ["https://cdn.discordapp.com/attachments/1008207706143871067/1030755127189065748/cs3start.mp4"],
      embeds: [{
        "title": "Cloudstream setup process",
        "description": "**Step 1:** Download and install the [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk).\n**Step 2:** Install the [repositories](https://cloudstream.cf/repos).\n\n**GIF guide of the process 🔽**",
        "color": 16711680
      }]
    })
    sendDm(member, {
      files: ["https://cdn.discordapp.com/attachments/1008296541926199337/1036935177508757544/manual.mp4"],
      embeds: [{
        "title": "If direct repo install doesn't work",
        "description": "**Copy/type the link in the repo box (`cs3 > Settings > Extensions > Add repository`)**\n\n:small_blue_diamond: english: **eng**\n:small_blue_diamond: multi: **multi**\n:small_blue_diamond: arabic: **arab**\n:small_blue_diamond: hexated: **hexa**\n:small_blue_diamond: darkdemon: **drepo**\n:small_blue_diamond: LikDev:  **likrepo**\n:small_blue_diamond: nsfw: **nsfw**\n\n**GIF guide of the process 🔽**",
        "color": 16711680,
      }]
    })
    this.embeds = [{
      "description": "If you need more guides, go to <#1031508285393748008>.",
      "color": 16711680
    }]
}
