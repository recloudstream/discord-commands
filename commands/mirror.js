module.exports = {
  name: "mirror",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Cloudstream mirror site",
          description:
            "If the official site is not working for you, use this page. You will get all the necessary informations here too.",
          url: "https://cs3docs.pages.dev/",
          color: 16711680,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1016716040648015972/1036940396317638757/l9_1.png",
          },
        },
      ],
    });
  },
};
