const axios = require("axios");
module.exports = {
    name: "stable",
    async execute(message) {
        message.channel.send({
            embeds: [{
                "title": "CS3 on Windows Subsystem for Android installation guide",
                "description": "Windows Subsystem for Android™️ enables your Windows device to run Android applications. Choose your Windows OS version to get the installation guide.",
                "url": "https://discord.com/channels/737724143126052974/1055348198320902175/1055348205430259732",
                "color": 1083392,
                "thumbnail": {
                  "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png"
            }],
            components: [
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 2,
                            "label": "Windows 11",
                            "url": "https://discord.com/channels/737724143126052974/1055348198320902175/",
                            "style": 5,
                            "emoji": {
                                "name": "win11",
                                "id": "1057679970337558529"
                            }
                        }, 
                        {
                            "type": 2,
                            "label": "Windows 10",
                            "url": "https://rentry.org/WSAon10",
                            "style": 5,
                            "emoji": {
                                "name": "win10",
                                "id": "1057681772378325042"
                            }
                        }
                    ]
               
            ]
        })
    },
};
