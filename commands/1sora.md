module.exports = {
  name: "1sora",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "Sorastream",
        "description": "Sorastream is a MultiAPI based source that scrapes **A LOT** of sites and uses TMDb for catalogue.",
        "color": 11485,
        "thumbnail": {
          "url": "https://raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/master/SoraStream/Icon.png"
        }
      }]
      components: [
        {
          "components": [
            {
              "custom_id": "select_commands",
              "max_values": 1,
              "min_values": 1,
              "options": [
                {
                  "label": "How to install Sorastream",
                  "value": "1sora.js|0"
                },
                {
                  "label": "FAQ",
                  "value": "1sora.js|1"
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
