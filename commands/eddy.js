module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
                "description": "[Click here](https://l.cloudstream.cf/dir_eddy) to install Eddy repo or use code \"eddy\".",
                "color": 16777215
            }]
        })
    },
};