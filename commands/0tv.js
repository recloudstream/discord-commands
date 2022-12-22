
module.exports = {
  name: "setup",
    onlyUsers: ["777478477569196044", "326466810150912000"],
    async execute(message) {
    message.channel.send({
      files: ["https://cdn.discordapp.com/attachments/737729263221997619/1055161412697198703/tv.mp4"],
      embeds: [{
         "title": "⚠️ Before starting the process",
      "description": "1. Make sure that you have **installed the downloader.**\n     i) for [**google tv**](https://play.google.com/store/apps/details?id=com.esaba.downloader&hl=en_GB&gl=US)\n     ii) for [**fire tv**](https://www.amazon.com/AFTVnews-com-Downloader/dp/B01N0BP507)\n2. Have **enabled unknown sources** in developer options.",
      "color": 16756483
    },
    {
      "title": "💡Please refer to these tutorials if you're unsure",
      "description": "1. [**Fire TV**](https://troypoint.com/how-to-jailbreak-a-firestick/)\n2. [**Google TV**](https://www.youtube.com/watch?v=W7NmOnhVd18)",
      "color": 47359
    },
    {
      "title": "The Installation process",
      "description": "1. Open **Downloader** on your device\n2. In the search box, type **532423**, and wait 5 seconds.\n3. Once the timer is up, click **install** on the popup\n4. Click **install once again** to install Cloudstream\n5. Click **Launch**",
      "color": 5413889
    },
    {
      "title": "*️⃣ Alternative method",
      "description": "1. Download [Send Files](https://play.google.com/store/apps/details?id=com.yablio.sendfilestotv) to Tv on both tv and mobile device.\n2. Download cs3 [pre-release](https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease-release.apk) in mobile\n3. Connect both devices to same Wi-Fi\n4. Share the file from your phone to the tv\n\n💡[Watch this video](https://youtu.be/lYQ9aBZnWZw) to learn the process.",
      "color": 16711680
    },
    {
      "title": "🧩 To install the repositories on TV",
      "description": " [Follow this method](https://discord.com/channels/737724143126052974/1055346838644994128/1055346842449227848) to know to do this process.",
      "color": 16755968
      }]
    })
  },
};
