const requireFromString = require('require-from-string');
module.exports = {
    name: "providers",
    cooldown: 60,
    nonEligibleUsersChannel: "737729263221997619",
    onlyChannels: ["737729263221997619"],
    async execute(message, inputs) {
        var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
        var repos = requireFromString(file.code)
        if (inputs?.length > 0 && inputs[0].startsWith("http")) {
            repos = [{ name: "Custom", url: inputs[0] }]
        }
        message.channel.send({
            embeds: [{
                "title": "Select to view providers",
                "color": null
            }],
            components: [
                {
                    "components": [
                        {
                            "custom_id": "provider_select",
                            "max_values": 1,
                            "min_values": 1,
                            "options": repos.map(value => {
                                var emojiValue = value.emoji;
                                if (emojiValue.includes(":")) {
                                    var emojiArray = emojiValue.replace(/<:|>/g, "").split(":")
                                    emojiValue = {
                                        "name": emojiArray[0],
                                        "id": emojiArray[1]
                                    }
                                }
                                return {
                                    "label": value.name,
                                    "value": value.raw_url,
                                    "emoji": emojiValue
                                }
                            }),
                            "placeholder": "Choose a repository",
                            "type": 3
                        }
                    ],
                    "type": 1
                }
            ]
        })
    },
};