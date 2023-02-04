const getFiles = require("./src/utils/getFiles.js");
module.exports = {
  name: "list",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Bot Commands",
          description: (await getFiles("commands"))
            .map((json) => "." + json.name.replace(".js", ""))
            .join("\n"),
          color: 3407616,
        },
      ],
    });
  },
};
