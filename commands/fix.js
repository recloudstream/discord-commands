module.exports = {
  name: "fix",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Troubleshooting",
          description:
            "You can read this page to get the idea how to fix your posted issue.",
          url: "https://cs3docs.pages.dev/troubleshooting/",
          color: 16711680,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1016716040648015972/1036940396317638757/l9_1.png",
          },
        },
      ],
    });
  },
};
