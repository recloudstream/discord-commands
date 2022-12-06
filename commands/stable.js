const axios = require("axios");
module.exports = {
    name: "stable",
    async execute(message) {
        let data = (await axios.get("https://api.github.com/repos/recloudstream/cloudstream/releases")).data
        let stable = data.find(it => it && !it.prerelease && it.tag_name !== "pre-release")
        let apk = stable.assets.find(it => it && it.content_type === "application/vnd.android.package-archive")
        message.channel.send({
            embeds: [{
                "description": `**but you will not get any quick bug fix or server support <:monkeshrug:853332276486209596>**\n\n⚠️ Some new sources may not work with this stable release.`,
                "color": 2815,
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