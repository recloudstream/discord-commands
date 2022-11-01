const axios = require("axios")
class AsyncConstructor {
  constructor(args) {
    return (async () => {
      var arrayRepos = []
      var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
      for (const repo in repos) {
        var json = repos[repo]
        var name = (await axios.get(json.url ?? json)).data.name.replace(/ providers repository| Providers Repository| Providers/g, "")
        if (json.verified) arrayRepos.push("<:verified:1036237892604936232> " + name + " : [Install](https://cs.repo/?" + json.url.replace("https://", "") + ")")
        else arrayRepos.push(name + ": [Install](https://cs.repo/?" + json.replace("https://", "") + ")")
      }
      this.files = ["https://cdn.discordapp.com/attachments/1008207706143871067/1030755127189065748/cs3start.mp4"]

      this.embeds = [{
        "title": "Cloudstream setup process",
        "description": `Download and install the [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk).`
      },
      {
        "title": "Cloudstream Repositories",
        "description": `${arrayRepos.join("\n\n")}\n`,
        "color": 1381909
      },
      {
        "title": "Don't install all the plugins from a repo without knowing.",
        "color": 16711680,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/1036209801803333632/1036609641636962334/unknown.png"
        },
        "description": "If you need more guides, go to<#1031508285393748008>"
      }]
      return this;
    })();
  }
}
module.exports = AsyncConstructor
