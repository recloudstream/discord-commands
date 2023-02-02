module.exports = {
  name: "linux",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "CS3 on Linux installation guide",
          description:
            "You can read this page to get an idea on how to install cs3 app and repos on Linux.",
          url: "https://docs.cloudstream.cf/other-devices/linux/",
          color: 16748288,
          thumbnail: {
            url: "https://media.discordapp.net/attachments/1008654622740729897/1039962777403543573/waydroid_white_tb.png",
          },
        },
      ],
    });
  },
};
