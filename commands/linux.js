module.exports = {
  name: "linux",
  async execute(message) {
    message.channel.send({
      embeds: [{
        "title": "CS3 on Linux installation guide",
        "description": "You can use [**Waydroid**](https://waydro.id/) to run Android on Linux.\n🔹[Installing Waydroid](https://docs.waydro.id/usage/install-on-desktops)\n🔹[Install and Run Android Applications](https://docs.waydro.id/usage/install-and-run-android-applications)\n🔹[Full documentation](https://docs.waydro.id/)\n🔹[Video guide](https://www.youtube.com/watch?v=FKnkIf9jb7U)",
        "color": 16745728,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1039962777403543573/waydroid_white_tb.png"
        }

      }]
    })
  },
};
