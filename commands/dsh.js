module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_dsh) to install Dontseehere repo or use code "dsh".',
          color: 16777215,
        },
      ],
    });
  },
};
