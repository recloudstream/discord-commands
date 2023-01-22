module.exports = {
  name: "vpn",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "VPN related article",
          description:
            "In this page you will get a basic ideas on VPNs and other FAQs.",
          url: "https://docs.cloudstream.cf/more-stuff/vpn/",
          color: 8981425,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/188/188120.png",
          },
        },
      ],
    });
  },
};
