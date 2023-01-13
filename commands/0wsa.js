module.exports = {
  name: "duckling",
  onlyUsers: ["777478477569196044", "326466810150912000"],
  async execute(message) {
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/737729263221997619/1054463610333692004/wsa.mp4",
      ],
      embeds: [
        {
          title: "Step 1",
          description:
            "Download and install all of these pieces of software.\n  - [Windows Subsystem for Android](https://apps.microsoft.com/store/detail/windows-subsystem-for-android%E2%84%A2-with-amazon-appstore/9P3395VX91NR?hl=en-us&gl=us)\n  - [WSA Pacman](https://github.com/alesimula/wsa_pacman)\n  - [Official Pre-release](https://github.com/recloudstream/cloudstream/releases)",
          color: 16711680,
        },
        {
          title: "Step 2",
          description: "- Open the files in wsa from the system tab.",
          color: 16711680,
          image: {
            url: "https://cdn.discordapp.com/attachments/1008207706143871067/1031103632923426843/unknown.png",
          },
        },
        {
          description: "- And then close it.",
          color: null,
          image: {
            url: "https://cdn.discordapp.com/attachments/1008207706143871067/1031103947257163856/unknown.png",
          },
        },
        {
          description: "- Enable developer mode in WSA settings.",
          color: null,
          image: {
            url: "https://cdn.discordapp.com/attachments/1008207706143871067/1031104739078832148/unknown.png",
          },
        },
        {
          description:
            "- Click on Pacman and see if it's successfully connected or not.",
          color: null,
          image: {
            url: "https://cdn.discordapp.com/attachments/1008207706143871067/1031106281441853451/unknown.png",
          },
        },
        {
          title: "Step 3",
          description: "- Open the apk file and install",
          color: 16711680,
          image: {
            url: "https://cdn.discordapp.com/attachments/1008207706143871067/1031106721852166154/unknown.png",
          },
        },
        {
          title:
            'You must "Always Allow" this! Otherwise, you\'ll have to do the whole process again.',
          color: 16769024,
          image: {
            url: "https://media.discordapp.net/attachments/1013281939026890793/1041630060702085160/allow.png",
          },
        },
      ],
    });
  },
};
