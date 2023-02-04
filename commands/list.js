const getFiles = require("./src/utils/getFiles.js");
module.exports = {
  name: "list",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Commands",
          description: (await getFiles("commands"))
            .map((json) => "." + json.name.replace(".js", ""))
            .join("\n"),
          color: 3407616,
        },
      ],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Edit on Github",
              url: "https://github.com/recloudstream/discord-commands/tree/master/commands",
              style: 5,
              emoji: "✍️",
            },
          ],
        },
      ],
    });
  },
};
