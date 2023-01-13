module.exports = {
  name: "india",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Sadge Indian Users",
          description:
            "India's censorship is fucked up. They even block GitHub links which doesn't make any sense. So, to solve the issue, **use DoH or a VPN**. Use **.vpn** to learn more about VPNs.\n\nPlease, use commands in <#737729263221997619>",
          color: 16740352,
          thumbnail: {
            url: "https://cdn.discordapp.com/emojis/1024415035398823997.gif?size=128&quality=lossless",
          },
        },
      ],
    });
  },
};
