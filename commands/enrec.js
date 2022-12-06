module.exports = {
  name: "enrec",
  async execute(message) {
    message.channel.send({
      content: "**Recommended English Sources**",
      components: [
        {
          "components": [
            {
              "custom_id": "select_commands",
              "max_values": 1,
              "min_values": 1,
              "options": [
                {
                  "label": "Movies & Series",
                  "value": "enrec.js|0"
                },
                {
                  "label": "Anime",
                  "value": "enrec.js|1"
                },
                {
                  "label": "Asian",
                  "value": "enrec.js|2"
                },
                {
                  "label": "TV & Sports",
                  "value": "enrec.js|3"
                }
              ],
              "placeholder": "Click to select",
              "type": 3
            }
          ],
          "type": 1
        }
      ]
    })
  },
};