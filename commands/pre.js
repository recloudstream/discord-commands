module.exports = {
  name: "pre",
  async execute(message) {
    var downloadLink =
      "https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk";
    message.channel.send({
      embeds: [
        {
          description: `Download the [pre release](${downloadLink}) to fix all your issues`,
          color: 11341326,
          image: {
            url: "https://media.discordapp.net/attachments/737724143570780260/993578886044590210/sticker.png?width=472&height=472",
          },
        },
      ],
    });
  },
};
