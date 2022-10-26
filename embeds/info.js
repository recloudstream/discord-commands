const getFiles = require("../functions/getFiles.js")
module.exports = (async()=> {
    return [{
        "title": "Embeds Extensions",
        "description": (await getFiles("embeds")).map(json=> json.name).join("\n"),
        "color": 3407616
    }]
})()
