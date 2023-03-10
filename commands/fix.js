module.exports = {
  name: "fix",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Troubleshooting",
          description:
            "You can read this page to get an idea on how to fix your posted issue.",
          url: "https://docs.cloudstream.cf/troubleshooting/",
          color: 16711680,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/7418/7418852.png",
          },
        },
      ],
    });
  },
};
