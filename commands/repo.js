module.exports = function main() {
  var repos = [
    {
      name: "English",
      url: "https://l.cloudstream.cf/dir_eng",
      emoji: "🇬🇧",
      shortcut: "eng"
    },
    {
      name: "Multi",
      url: "https://l.cloudstream.cf/dir_multi",
      emoji: "🌏",
      shortcut: "multi"
    },
    {
      name: "Arabic",
      url: "https://l.cloudstream.cf/dir_arab",
      emoji: "🇯🇴",
      shortcut: "arab"
    },
    {
      name: "Hexated",
      url: "https://l.cloudstream.cf/dir_hexa",
      emoji: "🌏",
      shortcut: "hexa"
    },
    {
      name: "DarkDemon",
      url: "https://l.cloudstream.cf/dir_drepo",
      emoji: "🇮🇳",
      shortcut: "drepo"
    },
    {
      name: "LikeDev",
      url: "https://l.cloudstream.cf/dir_likrepo",
      emoji: "🇮🇳",
      shortcut: "likrepo"
    },
    {
      name: "NSFW",
      url: "https://l.cloudstream.cf/dir_nsfw",
      emoji: "🔞",
      shortcut: "nsfw"
    },
    {
      name: "Stormunblessed",
      url: "https://l.cloudstream.cf/dir_storm",
      emoji: "🇪🇸",
      shortcut: "storm"
    }
  ]
  
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
