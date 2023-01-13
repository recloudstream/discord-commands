module.exports = {
  name: "opensubs",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Opensubtitles guide",
          description:
            "You can read this page to get an idea on how to login, use and add your own subtitles to that site.",
          url: "https://discord.com/channels/737724143126052974/1055350005088653352/1055350008788033626",
          color: 16711680,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1008654622740729897/1040172066348990526/os.png",
          },
        },
      ],
    });
  },
};
