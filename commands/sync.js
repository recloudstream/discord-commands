module.exports = {
  name: "sync",
  async execute(message) {
    message.channel.send({
      content: "https://rentry.org/gitsync"
    })
  },
};