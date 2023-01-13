module.exports = {
  name: "cast",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Why is chromecasting not working?",
          description:
            "**1. **The provider/video host simply does not support casting (referrer blocked). **We can't fix this.**\n**2. **You are using a VPN, most video links are IP blocked meaning that casting will fail if you are connected to a VPN.",
          color: 14855947,
        },
        {
          title: "You can try an external web caster.",
          description:
            "For example, Web Video Caster allows you to watch on your TV videos from your favorite websites.\n**Features:**\n🔹Shows, live streams, photos, audio files and IPTV.\n🔹Cast local videos stored on your phone.\n🔹Subtitles from the web page, local storage or OpenSubtitles\n🔹Supports Chromecast, Roku, DLNA receivers, Fire TV and sticks, Smart TVs and PlayStations.\n\n[**Click here**](https://play.google.com/store/apps/details?id=com.instantbits.cast.webvideo) to install the app. But keep in mind that this software may not solve your issue.",
          color: 14855947,
          thumbnail: {
            url: "https://www.webvideocaster.com/assetsWVC/wvc_icon.png",
          },
        },
      ],
    });
  },
};
