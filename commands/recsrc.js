module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Recommended Sources",
          description: "These are the best extensions for cloudstream.",
          url: "https://cs3docs.pages.dev/recsrc/",
          color: null,
          thumbnail: {
            url: "https://thumbs.gfycat.com/BrilliantDefensiveIslandwhistler-max-1mb.gif",
          },
        },
      ],
    });
  },
};
