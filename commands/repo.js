const requireFromString = require('require-from-string');
module.exports = {
  name: "repo",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
    var repos = requireFromString(file.code)
    message.channel.send({
      embeds: [{
        "title": "Cloudstream Repositories",
        "description": repos.map(value => `${value.emoji} **${value.name}**: [Install](${value.url})`).join("\n\n"),
        "url": "https://cloudstream.cf/repos",
        "color": 16711680,
      }]
    })
  },
};
