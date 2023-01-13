module.exports = {
  name: "ursite",
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/1036144578690031726/1036373788109058178/ursite.mp4",
      ],
    });
  },
};
