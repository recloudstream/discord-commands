module.exports = {
  name: "nsfw",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    if ((new Date()).getMonth() === 10 && Math.random() <= 0.35)
      message.channel.send({ content: "https://tenor.com/view/no-nut-november-nnn-discord-ryan-gosling-embed-fail-gif-23637560" })
    else message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/737729263221997619/1035548185063591986/nsfw.mp4"]
    })
  },
};
