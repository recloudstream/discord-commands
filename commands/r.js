module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Repositories",
          url: "https://rentry.org/cs3-repos",
          color: 16777215,
          image: {
            url: "https://cdn.discordapp.com/emojis/974924816698208267.webp",
          },
        },
      ],
    });
  },
};
