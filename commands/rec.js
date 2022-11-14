module.exports = function main() {
  this.content = "**Recommended English Sources**"
  this.components = [
    {
        "components": [
            {
                "custom_id": "select_commands",
                "max_values": 1,
                "min_values": 1,
                "options": [
                  {
                    "label": "Movies & Series",
                    "value": "rec.js|0"
                  },
                  {
                    "label": "Anime",
                    "value": "rec.js|1"
                  },
                  {
                    "label": "Asian",
                    "value": "rec.js|2"
                  },
                  {
                    "label": "TV & Sports",
                    "value": "rec.js|3"
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
