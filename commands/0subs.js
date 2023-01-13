module.exports = {
  name: "duckling",
  onlyUsers: ["777478477569196044", "326466810150912000"],
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Select subtitle source",
          description:
            "**Video player> sources> subtitles>** 3 types of subtitle source:\n1. from the provider\n2. from the device\n3. from the internet which are [Open subtitles](https://www.opensubtitles.com/), [Addic7ed](https://www.addic7ed.com/) and [Index subtitles](https://subscene.cyou/) (not stable).",
          color: null,
          image: {
            url: "https://user-images.githubusercontent.com/57977673/194716636-f16fe137-c2e6-4529-bfd8-b86214ab8843.png",
          },
        },
        {
          title: "Subtitle appearance settings",
          description: "**Settings> Player> Subtitles**",
          color: null,
          image: {
            url: "https://user-images.githubusercontent.com/57977673/194716099-e7932efe-0c60-4837-be1d-70fe3d514d98.png",
          },
        },
        {
          title: "Subtitle sync",
          description:
            "**Video player> Sync subs> Put your positive or negative delay**",
          color: null,
          image: {
            url: "https://user-images.githubusercontent.com/57977673/194716414-7b24555c-172b-439c-a9d5-e45ea0c71ee0.png",
          },
        },
      ],
    });
  },
};
