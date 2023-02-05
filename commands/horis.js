module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_horis) to install Horis repo or use code "horis".',
          color: 16777215,
        },
      ],
    });
  },
};
