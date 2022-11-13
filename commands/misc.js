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
                    "emoji": "💠",
                    "value": "misc.js|0"
                  },
                  {
                    "label": "Download Navi",
                    "emoji": "💠",
                    "value": "misc.js|1"
                  },
                  {
                    "label": "Web Video Caster",
                    "emoji": "💠",
                    "value": "misc.js|2"
                  },
                  {
                    "label": "GetSub - Subtitles Downloader",
                    "emoji": "💠",
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
