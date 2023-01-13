module.exports = {
  name: "k",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title:
            "Use other Anime extensions. We recommend Kamyroll, Sora, Allanime, Gogo, tenshi.",
          color: 16711680,
          image: {
            url: "https://cdn.discordapp.com/attachments/1013281939026890793/1055880766883639418/image.png",
          },
        },
      ],
    });
  },
};
