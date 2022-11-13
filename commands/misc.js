module.exports = function main() {
  this.content = "Useful miscs"
  this.components = [
    {
        "components": [
            {
                "custom_id": "select_commands",
                "max_values": 1,
                "min_values": 1,
                "options": [
                  {
                    "label": "mpv-android",
                    "emoji": "<:mpvlite:1041423456723538072>",
                    "value": "misc.js|0"
                  },
                  {
                    "label": "Download Navi",
                    "emoji": "<:navi:041422890832232568>",
                    "value": "misc.js|1"
                  },
                  {
                    "label": "Web Video Caster",
                    "emoji": "<:wvc:041422866031312977>",
                    "value": "misc.js|2"
                  },
                  {
                    "label": "GetSub - Subtitles Downloader",
                    "emoji": "<:sub:041422843088470036>",
                    "value": "misc.js|3"
                  }
                ],
                "placeholder": "Click to select",
                "type": 3
            }
        ],
        "type": 1
    }
  ]
}
