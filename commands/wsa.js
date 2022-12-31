module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{

                "title": "CS3 on WSA guide",
                "description": "Windows Subsystem for Android™️ enables your Windows device to run Android applications. Choose your Windows OS version to get the installation guide.",
                "url": "https://discord.com/channels/737724143126052974/1055348198320902175/1055348205430259732",
                "color": 1083392,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png"
                }

            }]
        })
    },
};
