module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Site Cloning",
      "description": "If the site in the app is blocked for your region, you can make a clone of that site using a site of same structure which is working for you.",
      "url": "https://docs.cloudstream.cf/settings/cloningsite/",
      "color": 36863,
      "thumbnail": {
        "url": "https://cdn-icons-png.flaticon.com/512/4015/4015781.png"
      }
            }]
        })
    },
};
