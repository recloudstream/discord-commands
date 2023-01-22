module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Recommended Sources",
          description:
            "This page covers the various sources recommended by the developers, ranked, based on their reliability, quality, speed and content availability.",
          url: "https://docs.cloudstream.cf/recsrc/",
          color: 41983,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/5562/5562017.png",
          },
        },
        {
          title: "Recommended Apps",
          description:
            "This page covers the various apps recommended by the community, to enhance your media experience when using CS3.",
          url: "https://docs.cloudstream.cf/recapps/",
          color: 41983,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/5996/5996260.png",
          },
        },
      ],
    });
  },
};
