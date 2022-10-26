const axios = require("axios")
module.exports = new function main() {
    var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
    .map(json=> {
        if(json.verified) return "  <:verified:1027693463573114903> " + json.url.split("/")[4] + " :\n[Install](" + json.url + ")"
        else return json.split("/")[4] + ":\n[Install](" + json + ")"
    })
    this.content = "hello"
    this.embeds = [{
        "title": "Cloudstream Urls",
        "description": `🌏 Links: \nhttps://recloudstream.github.io/ (Site)\nhttps://recloudstream.github.io/repos (Repositories)\nhttps://github.com/recloudstream/cloudstream (Github)\n\n 🧩 Plugin Repositories:\n ${repos.join("\n\n")}\n\n📽️ Tutorials: \n➡️ cs3 repo install auto: https://streamable.com/22l446\n➡️ cs3 repo install manual: https://streamable.com/gzf2yb\n➡️ download qualities: https://streamable.com/fkl6v0\n➡️ disable sub permanently: https://streamable.com/tum2iv\n➡️ all subtitle settings: https://rentry.org/cssub\n➡️ vpn quarries: https://rentry.org/askvpn\n➡️ stremio config: https://streamable.com/wbrlnp and https://rentry.org/stremio\n➡️ wsa: https://rentry.org/wsa\n\n🍴 Forks:\n➡️ https://github.com/Sarlay/SunStream/releases (Sarlay)\n➡️ https://github.com/Sir-Aguacata/AquaStream (Aguacata)\n\n💾 Backups: \n➡️https://gitdab.com/recloudstream (Mirror)\n➡️https://matrix.to/#/#lagrapps:matrix.org (Matrix Server)`,
        "color": 1381909
    }]
}
