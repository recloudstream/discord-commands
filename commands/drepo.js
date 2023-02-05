module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "description": "[Click here](https://l.cloudstream.cf/dir_drepo) to install Darkdemon repo or use code \"drepo\".",
                "color": 16777215
            }]
        })
    },
};