module.exports = {
  name: "dev",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "For extension developers",
          description:
            "This section will outline how to start developing your own extensions for Cloudstream.\n\n**Topics:**\n🔹[Using plugin template](https://docs.cloudstream.cf/devs/using-plugin-template)\n🔹[Creating your own providers](https://docs.cloudstream.cf/devs/create-your-own-providers)\n🔹[Scraping tutorial](https://docs.cloudstream.cf/devs/scraping/)\n🔹[Creating your own JSON repository](https://docs.cloudstream.cf/devs/create-your-own-json-repository)",
          url: "https://docs.cloudstream.cf/devs/",
          color: 4587714,
          thumbnail: {
            url: "https://raw.githubusercontent.com/github/explore/4479d2a2c854198cb00160f8593519c14dc3b905/topics/kotlin/kotlin.png",
          },
        },
      ],
    });
  },
};
