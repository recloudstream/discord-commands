module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Quicknovel",
          description:
            "QN is a FOSS novel reader that supports sources for LN, WN and other eBooks. It also offers external reader. It can download and convert files to epub.",
          url: "https://github.com/LagradOst/QuickNovel/releases",
          color: 2247143,
          thumbnail: {
            url: "https://raw.githubusercontent.com/LagradOst/QuickNovel/master/app/src/main/ic_launcher-playstore.png",
          },
        },
      ],
    });
  },
};
