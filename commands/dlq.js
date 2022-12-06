module.exports = {
  name: "dlq",
  async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/1008207706143871067/1030522800445857812/dlquality.mp4"]
    })
  },
};