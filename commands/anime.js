module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Recommended Anime Extensions",
          url: "https://docs.cloudstream.cf/recsrc/#anime",
          color: null,
          image: {
            url: "https://media.discordapp.net/attachments/1015131233824538624/1078727091459194910/iBjiWut.png",
          },
        },
      ],
    });
  },
};
