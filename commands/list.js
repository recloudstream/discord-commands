const getFiles = require("./src/utils/getFiles.js")
class AsyncConstructor {
    constructor(args) {
        return (async () => {
            this.embeds = [{
                "title": "Commands",
                "description": (await getFiles("commands")).map(json => "." + json.name.replace(".js", "")).join("\n"),
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
