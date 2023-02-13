//const { drawImage } = require("./src/utils/drawImage.js");
module.exports = {
  name: "draw",
  cooldown: 60,
  onlyChannels: ["737729263221997619"],
  async execute(message, inputs) {
    /*
    message.channel.send({
      content: resp?.content,
      files: resp?.files,
    });
    this.content = resp?.content;
    this.files = resp?.files;
    */
    message.channel.send({
      content: `Please wait ${Math.ceil(Math.random() * 69)}s`,
    });
  },
};
