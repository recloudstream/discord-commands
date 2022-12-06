module.exports = {
  name: "github",
  async execute(message) {
    message.channel.send({
      content: "https://github.com/recloudstream/cloudstream/releases"
    })
  },
};