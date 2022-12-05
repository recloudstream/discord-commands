module.exports = {
  name: "stremiotv",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1035159969332478035/1045707470284271616/stremiotv.mp4"]
    })
  },
};