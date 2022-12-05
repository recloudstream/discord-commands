module.exports = {
  name: "sync",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      content: "https://rentry.org/gitsync"
    })
  },
};