const requireFromString = require('require-from-string');
module.exports = function main() {
  var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
  var repos = requireFromString(file.code)
  this.embeds = [{
    "title": "Cloudstream Repositories",
    "description": repos.map(value => `${value.emoji} **${value.name}**: [Install](${value.url})`).join("\n\n") + "\n\nDon't install all the plugins from a repo without knowing.",
    "url": "https://cloudstream.cf/repos",
    "color": 16711680,
    "image": {
      "url": "https://cdn.discordapp.com/attachments/1036209801803333632/1036609641636962334/unknown.png"
    }
  }]

}
