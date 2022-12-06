module.exports = {
  name: "setup",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Cloudstream setup process",
        "description": "**Step 1:** Download and install the [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk).\n**Step 2:** Install the [repositories](https://cloudstream.cf/repos).\n\nIf you need more guides, go to <#1031508285393748008>.\n\n **Don't install all the plugins from a repo without knowing**",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1036209801803333632/1036609641636962334/unknown.png"
        }
      }]
    })
  },
};