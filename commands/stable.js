const axios = require("axios");
module.exports = {
    name: "stable",
    async execute(message) {
        let data = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream/releases")).data
        let stable = data.find(it => it && !it.prerelease && it.tag_name !== "pre-release")
        let apk = stable.assets.find(it => it && it.content_type === "application/vnd.android.package-archive")
        message.channel.send({
            embeds: [{
                "title": "Cloudstream Stable Release",
      "description": "In stable release, you'll get stable features, less bugs and less frequent updates.\n\nBut you will not get bug fixes, feature updates or other updates as soon as pre-release.  Also, we don't provide support for any stable version related issues.",
      "color": 331215,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1008207706143871067/1038448568589094982/7R.png"
      }
            }],
            components: [
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 2,
                            "label": `Download stable release ${stable.tag_name}`,
                            "style": 5,
                            "url": apk.browser_download_url
                        }
                    ]

                }
            ]
        })
    },
};
