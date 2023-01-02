module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "title": "Change APK Installer",
                "description": "Go to **CS3 → Updates and backup → APK Installer → Legacy** and **Apply**",
                "color": null,
                "image": {
                    "url": "https://media.discordapp.net/attachments/1015131233824538624/1059516097373683833/image.png"
                }
            }]
        })
    },
};
