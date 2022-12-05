const { drawImage } = require("./src/utils/drawImage.js")
module.exports = {
    name: "draw",
    nonEligibleUsersChannel: "737729263221997619",
    onlyChannels: ["737729263221997619"],
    async execute(message, inputs) {
        let prompt = inputs.join(" ")
        let resp = await drawImage(prompt)
        message.channel.send({
            content: resp?.content,
            files: resp?.files
        })
        this.content = resp?.content
        this.files = resp?.files
    },
};
