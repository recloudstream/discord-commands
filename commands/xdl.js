module.exports = {
  name: "xdl",
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/1015131233824538624/1052276644569677864/use1DM.mp4",
      ],
      embeds: [
        {
          title: "Use 1DM",
          description:
            "You can download from any source without any issue using 1DM. **Max the Number of connections** to get the best download speed",
          url: "https://play.google.com/store/apps/details?id=idm.internet.download.manager&hl=en&gl=US",
          color: null,
          thumbnail: {
            url: "https://play-lh.googleusercontent.com/cvdER0qgn-J36TrPVdvoQ3oWa3QzUVnIaPvXhddOgVZhz50tfxFAAbw76PqWEtlHmTo=w240-h480-rw",
          },
        },
      ],
    });
  },
};
