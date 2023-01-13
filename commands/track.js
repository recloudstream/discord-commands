module.exports = {
  name: "track",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Anime tracking",
          description:
            "Anime tracking process works with **only anime extensions**. So, it'll not work with extensions like SuperStream, Sflix, loklok etc. Some anime extensions might also not work with the tracking process as the sources don't contain all the required metadata.",
          url: "https://discord.com/channels/737724143126052974/1055350390935269448/1055350398241746995",
          color: 31487,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/3031/3031727.png",
          },
        },
      ],
    });
  },
};
