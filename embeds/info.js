const getFiles = require("../functions/getFiles.js")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
        this.embeds = [{
            "title": "Github Embeds",
            "description": (await getFiles("embeds")).map(json=> json.name).join("\n"),
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
module.exports = new AsyncConstructor()
