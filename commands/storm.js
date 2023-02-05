module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "description": "[Click here](https://l.cloudstream.cf/dir_storm) to install Stormunblessed repo or use code \"storm\".",
                "color": 16777215
            }]
        })
    },
};