module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Provider Languages",
          description:
            "Go to **Cloudstream → Settings → Providers  → Provider Languages**, select the required extension languages and press **apply**.",
          color: null,
          image: {
            url: "https://media.discordapp.net/attachments/1044322950725259274/1066062196716617738/0ZS032G.png",
          },
        },
      ],
    });
  },
};
