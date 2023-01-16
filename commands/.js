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
            url: "https://media.discordapp.net/attachments/1015131233824538624/1063502811444289617/cover.png?width=1341&height=670",
          },
        },
      ],
    });
  },
};
