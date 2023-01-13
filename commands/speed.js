module.exports = {
  name: "speed",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: 'Why "XYZ" server is so slow?',
          description:
            "Speed of the servers are **NOT** constant for every user. It has various factors. For example:\n**1.** Your region\n**2.** Your bandwidth\n**3.** Your ISP's DNS\n**4.** Server traffic",
          color: 16711680,
        },
      ],
    });
  },
};
