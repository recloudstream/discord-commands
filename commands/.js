module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Cloudstream Documentation",
          description:
            "A comprehensive guide that explores the various features, settings, integrations available within the app and assists with the fixes of the various issues that you may encounter.",
          url: "https://cs3docs.pages.dev/",
          color: null,
          image: {
            url: "https://cdn.discordapp.com/attachments/1015131233824538624/1064779145139212429/eIhhoOg.png",
          },
        },
      ],
    });
  },
};
