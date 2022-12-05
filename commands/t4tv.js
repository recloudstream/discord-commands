module.exports = {
  name: "t4tv",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1008654622740729897/1038783835233603604/time4tv.mp4"]
    })
  },
};