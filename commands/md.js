module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Metadata is not provided by site",
          description:
            "The extension is using an external API (e.g., [TMDB](https://www.themoviedb.org/)) to collect the data of the content instead of the website. So it may show results that's not in the sources. If that's the case it'll show \"*No links found*\". It may show this also due to indexing issue (if the API can't find the file with similar name in the site).",
          color: 57599,
        },
      ],
    });
  },
};
