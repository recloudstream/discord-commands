const requireFromString = require('require-from-string');
module.exports = function main() {
  var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
  var repos = requireFromString(file.code)
  this.embeds = [{
    "title": "Cloudstream Repositories",
    "description": repos.map(value => `${value.emoji} **${value.name}**: [Install](${value.url})`).join("\n\n"),
    "url": "https://cloudstream.cf/repos",
    "color": 16711680,
  }]

}
