module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Cloudstream 3 Documentation",
          description:
            "The guide explores the various features, settings, integrations available within the app and assists with troubleshooting.",
          url: "https://docs.cloudstream.cf/",
          color: null,
          image: {
            url: "https://cdn.discordapp.com/attachments/1015131233824538624/1064779145139212429/eIhhoOg.png",
          },
        },
      ],
    });
  },
};
