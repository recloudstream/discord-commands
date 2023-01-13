module.exports = {
  name: "duckling",
  onlyUsers: ["777478477569196044", "326466810150912000"],
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/737729263221997619/1055182752854577202/manual.mp4",
      ],
      embeds: [
        {
          description:
            "**Type or copy and paste these codes** in the **settings > extensions > add repository > repository url** and click **add repository**.",
          color: null,
        },
      ],
    });
  },
};
