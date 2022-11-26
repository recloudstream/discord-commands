const requireFromString = require('require-from-string');
module.exports = function main() {
  var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
  var repos = requireFromString(file.code)
  this.files = ["https://cdn.discordapp.com/attachments/1008296541926199337/1036935177508757544/manual.mp4"]
  this.embeds = [{
    "title": "For manual install of the repositories",
    "description": repos.map(value => `${value.emoji} ${value.name}: **${value.shortcut}**`),
    "color": 16711680
  }]
}
