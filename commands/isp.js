module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Use VPN to install repos",
      "description": "Your ISP is blocking Github raw URLs. You have to use VPN to install the repositories. You can try [these VPNs](https://docs.cloudstream.cf/recapps/#vpn).",
      "color": 9568470,
      "thumbnail": {
        "url": "https://cdn-icons-png.flaticon.com/512/188/188120.png"
      }
            }]
        })
    },
};
