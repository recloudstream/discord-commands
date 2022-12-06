module.exports = {
  name: "ask",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1015131233824538624/1044144449267171349/justask.png"]
    })
  },
};