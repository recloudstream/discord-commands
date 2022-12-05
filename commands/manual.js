const requireFromString = require('require-from-string');
module.exports = {
  name: "manual",
  nonEligibleUsersChannel: "737729263221997619",
  async execute(message) {
    var file = globalThis.events_src.filter(json => json.name == "repos.js")[0]
    var repos = requireFromString(file.code)
    message.channel.send({
      embeds: [{
        "title": "For manual install of the repositories",
        "description": repos.map(value => `${value.emoji} ${value.name}: **${value.shortcut}**`).join("\n\n"),
        "color": 16711680
      }],
      files: ["https://cdn.discordapp.com/attachments/1008296541926199337/1036935177508757544/manual.mp4"]
    })
  },
};
