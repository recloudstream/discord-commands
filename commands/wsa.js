module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{

                "title": "WSA installation Guide For Win 10 & 11",
                "description": "Windows Subsystem for Android™️ enables your Windows device to run Android applications. Choose your Windows OS version to get the installation guide.",
                "url": "https://rentry.org/wsa",
                "color": 1083392,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png"
                }

            }]
        })
    },
};
