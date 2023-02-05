module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_eng) to install English repo or use code "Eng".',
          color: 16777215,
        },
      ],
    });
  },
};
