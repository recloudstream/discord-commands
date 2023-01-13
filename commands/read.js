module.exports = {
  name: "read",
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/859049451195727922/943918348092194846/videoplayback.mp4",
      ],
    });
  },
};
