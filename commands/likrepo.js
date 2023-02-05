module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "description": "[Click here](https://l.cloudstream.cf/dir_likrepo) to install Likdev repo or use code \"likrepo\".",
                "color": 16777215
            }]
        })
    },
};