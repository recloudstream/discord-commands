module.exports = {
  name: "store",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Cloudstream Beta - Microsoft Store Apps",
          description:
            "Cloudstream is a Windows app for streaming and downloading Movies, TV-Series, Asian Dramas, Anime and IPTV. The app provides all the contents without any sign-up and subscription.\n\nFeatures include:\n- 4K movies\n- Anime tracking\n- Subtitle downloads\n- Chromecast support",
          url: "https://docs.cloudstream.cf/other-devices/windows/",
          image: {
            url: "https://cdn.discordapp.com/attachments/1016716040648015972/1036639726255480853/cover.png",
          },
        },
      ],
    });
  },
};
