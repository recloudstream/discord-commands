module.exports = {
  name: "ursite",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1036144578690031726/1036373788109058178/ursite.mp4"]
    })
  },
};