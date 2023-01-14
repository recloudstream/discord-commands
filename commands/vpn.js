module.exports = {
  name: "vpn",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "VPN related article",
          description:
            "In this page you will get the basic ideas and other FAQs.",
          url: "https://cs3docs.pages.dev/miscellaneous/#vpn",
          color: 8981425,
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/188/188120.png",
          },
        },
      ],
    });
  },
};
