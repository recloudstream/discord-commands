const getFiles = require("../functions/getFiles.js")
class AsyncConstructor {
    constructor(value) {
    return (async () => {
        this.embeds = [{
            "title": "Github Embeds",
            "description": (await getFiles("embeds")).map(json=> json.name).join("\n"),
            "color": 3407616
        },{
            "title": "Server Embeds",
            "description": (await getFiles("embeds", false)).map(json=> json.name).join("\n"),
            "color": 3407616
        }]
        return this;
        })();
    }
}
module.exports = new AsyncConstructor()