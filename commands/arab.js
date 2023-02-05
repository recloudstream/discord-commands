module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_arab) to install Arabic repo or use code "Arab".',
          color: 16777215,
        },
      ],
    });
  },
};
