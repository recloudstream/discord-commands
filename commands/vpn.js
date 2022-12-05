module.exports = {
  name: "vpn",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "VPN related article",
        "description": "In this page you will get the basic ideas and other FAQs.",
        "url": "https://rentry.org/askvpn",
        "color": 8981425,
        "thumbnail": {
          "url": "https://cdn-icons-png.flaticon.com/512/188/188120.png"
        }
      }]
    })
  },
};