module.exports = {
  name: "dev",
  async execute(message) {
    message.channel.send({
      embeds: [
"title": "For extension developers",
      "description": "You can read the documentation to know how to develop extensions for cloudstream.",
      "url": "https://docs.cloudstream.cf/devs/gettingstarted/",
      "color": 12058879,
      "thumbnail": {
        "url": "https://images-ext-1.discordapp.net/external/CwYUlAxTS2m_Z1Anvr6hB-mZlPxUZtC5HMWuHxq9iW0/https/raw.githubusercontent.com/github/explore/4479d2a2c854198cb00160f8593519c14dc3b905/topics/kotlin/kotlin.png"
      },
        },
      ],
    });
  },
};
