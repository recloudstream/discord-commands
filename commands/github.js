module.exports = {
  name: "github",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      content: "https://github.com/recloudstream/cloudstream/releases"
    })
  },
};