module.exports = {
  name: "duckling",
  onlyUsers: ["777478477569196044", "326466810150912000"],
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/1015131233824538624/1055176868141219901/track.mp4",
      ],
      embeds: [
        {
          description:
            "Anime tracking process works with **only anime extensions**. So, it'll not work with extensions like SuperStream, Sflix, loklok etc. Some anime extensions might also not work with the tracking process as the sources don't contain all the required metadata.",
          url: "https://rentry.org/anitrack",
          color: 31487,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/3031/3031727.png",
          },
        },
      ],
    });
  },
};
