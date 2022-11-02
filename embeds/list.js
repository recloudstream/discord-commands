const getFiles = require("../functions/getFiles.js")
class AsyncConstructor {
    constructor(args) {
        return (async () => {
            this.embeds = [{
                "title": "Github Embeds",
                "description": (await getFiles("embeds", false)).map(json => "." + json.name.replace(".js", "")).join("\n"),
                "color": 3407616
            }]
            this.components = [
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 2,
                            "label": "Edit on Github",
                            "url": "https://github.com/ImZaw/discord-extensions/tree/master/embeds",
                            "style": 5,
                            "emoji": "✍️"
                        }
                    ]
                }
            ]
            return this;
        })();
    }
}
module.exports = AsyncConstructor
