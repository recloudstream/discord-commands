module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Skip Loading",
          description:
            "While scraping links in the background, it immediately plays the best resolution currently available, bypassing the scraping process.",
          color: null,
        },
        {
          description:
            "Let's say Sora uses over 30 APIs to scrape a link. If the loading is not skipped, Sora will scrape all 30+ APIs and display the best available resolution for the video. However, if you skip the loading, the program will immediately start playing the video with the best available resolution, which may not necessarily be the highest quality (e.g. it could be a 240p video depending on when you skip the loading).",
          color: null,
        },
      ],
    });
  },
};
