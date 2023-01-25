module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "WSA installation Guide For Win 10 & 11",
          description:
            "Windows Subsystem for Android™️ (WSA) enables your Windows 10 and 11 devices to run Android applications. The latest WSA version includes Android 13, Google Play Services and Magisk (to allow root access).\n If you face any issue installing WSA, join the [support server](https://discord.com/invite/2thee7zzHZ).",
          url: "https://docs.cloudstream.cf/other-devices/windows/",
          color: 1083392,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1008654622740729897/1039955155099078726/wsa.png",
          },
        },
      ],
    });
  },
};
