module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Change Cache Settings",
          description:
            "Go to **Cloudstream → Settings → Player**, change the cache settings and press **apply**.",
          color: null,
          image: {
            url: "https://media.discordapp.net/attachments/1044322950725259274/1066062587600584704/v6SBUt6.png",
          },
        },
      ],
    });
  },
};
