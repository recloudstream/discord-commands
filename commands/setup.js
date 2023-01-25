module.exports = {
  name: "setup",
  async execute(message) {
    message.channel.send({
      files: [
        "https://media.discordapp.net/attachments/737724143570780260/1049346871946117173/cs3start.mp4",
      ],
      embeds: [
        {
          title: "Cloudstream setup process",
          description:
            "**Step 1:** Download and install the [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk).\n**Step 2:** Install the [repositories](https://cloudstream.cf/repos).",
          color: 16711680,
        },
      ],
    });
  },
};
