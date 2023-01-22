module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Network Stream",
          description:
            "Using this feature you can stream Youtube, m3u links, other online sources that aren't present in Cloudstream.",
          url: "https://docs.cloudstream.cf/settings/stream/",
          color: 41983,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/282/282100.png",
          },
        },
      ],
    });
  },
};
