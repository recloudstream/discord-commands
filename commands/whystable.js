module.exports = {
  name: "whystable",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "**Pros and Cons of Stable Version **",
          color: 16777215,
        },
        {
          title: "Pros:",
          description:
            "1. Finished features update\n2. Tested product\n3. Less amount of updates\n4. Almost no UI bugs and crashes",
          color: 1034592,
        },
        {
          title: "Cons:",
          description:
            "1. Features being added very late\n2. Very late fix updates\n3. Some sources may not work because of the needed API updates\n4. Most of the helpers use the beta version, since that has all the latest features",
          color: 14811650,
        },
      ],
    });
  },
};
