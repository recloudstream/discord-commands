module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_hexa) to install Hexated repo or use code "hexa".',
          color: 16777215,
        },
      ],
    });
  },
};
