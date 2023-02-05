module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          description:
            '[Click here](https://l.cloudstream.cf/dir_nsfw) to install NSFW repo or use code "nsfw".',
          color: 16777215,
        },
      ],
    });
  },
};
