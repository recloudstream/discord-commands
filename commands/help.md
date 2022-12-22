module.exports = {
  name: "help",
  async execute(message) {
    message.channel.send({
      content: "Help",
      components: [
        {
          "components": [
            {
              "custom_id": "select_commands",
              "max_values": 1,
              "min_values": 1,
              "options": [
                {
                  "label": "Links",
                  "emoji": "💠",
                  "value": "https://discord.com/channels/737724143126052974/1031508285393748008/1036346889467076638"
                },
                {
                  "label": "Features",
                  "emoji": "💠",
                  "value": "https://discord.com/channels/737724143126052974/1031508285393748008/1040671780488085504"
                },
                {
                  "label": "How to",
                  "emoji": "💠",
                  "value": "https://discord.com/channels/737724143126052974/1031508285393748008/1040671883357585489"
                },
                {
                  "label": "Others",
                  "emoji": "💠",
                  "value": "https://discord.com/channels/737724143126052974/1031508285393748008/1040671932816826430"
                },
                {
                  "label": "Responses",
                  "emoji": "💠",
                  "value": "https://discord.com/channels/737724143126052974/1031508285393748008/1040671950479036507"
                }
              ],
              "placeholder": "Topics",
              "type": 3
            }
          ],
          "type": 1
        }
      ]
    })
  },
};
