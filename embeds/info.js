const getFiles = require("../functions/getFiles.js")
module.exports = (async()=> {
    return {
        "title": "Extensions - Embeds",
        "description": (await getFiles("embeds")).map(json=> json.name).join("\n"),
        "color": 3407616
    }
})()
