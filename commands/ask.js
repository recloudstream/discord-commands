module.exports = {
  name: "ask",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1015131233824538624/1044144449267171349/justask.png"]
    })
  },
};