module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "description": "[Click here](https://l.cloudstream.cf/dir_multi) to install Multilingual repo or use code \"multi\".",
                "color": 16777215
            }]
        })
    },
};