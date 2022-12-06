module.exports = {
  name: "freevpn",
  async execute(message) {
    message.channel.send({
      embeds: [{
"title": "Winscribe",
      "description": "**Features:**\n🔹10 server locations\n🔹10 GB/month bandwidth\n🔹Unlimited simultaneous connection\n\n**Server locations:** U.S., Canada, U.K, Hong Kong, France, Germany, Netherlands, Switzerland, Norway, and Romania",
      "url": "https://play.google.com/store/apps/details?id=com.windscribe.vpn&hl=en&gl=US",
      "color": 16777215,
      "thumbnail": {
        "url": "https://avatars.githubusercontent.com/u/30499389?s=280&v=4"
      }
    },
    {
      "title": "Proton",
      "description": "**Features:**\n🔹3 server locations\n🔹Unlimited bandwidth\n🔹Single VPN connection\n\n**Server locations:** U.S., Netherlands, Japan.\n\nThe number of free servers is pretty low. So, you may face high ping and connection issues.",
      "url": "https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en&gl=US",
      "color": 7764701,
      "thumbnail": {
        "url": "https://seeklogo.com/images/P/proton-vpn-logo-A50452564D-seeklogo.com.png"
      }
    },
    {
      "title": "Oracle Self-hosted VPN",
      "description": "**Features: **\n🔹1 server location\n🔹10TB/month\n🔹up to 500Mbps speed\n\n**Server locations:** U.S., Netherlands, Switzerland. \n\n[Sample video tutorial for Oracle](https://www.youtube.com/watch?v=E-CLtExRzX8) | [Documentation](https://blogs.oracle.com/developers/post/launching-your-own-free-private-vpn-in-the-oracle-cloud)\n\n⚠️We won't provide any support for self-hosted VPN method. Go to other servers or sites to get the support. Also, you can do similar process with other services too (AWS, Google cloud etc.).",
      "color": 16711680,
      "thumbnail": {
        "url": "https://leadsbridge.com/wp-content/themes/leadsbridge/img/integration-lg-logos/logo106.png"
      }
      }]
    })
  },
};
