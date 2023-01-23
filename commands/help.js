module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Cloudstream Help!",
          description:
            "1. [**Setup Process**](https://docs.cloudstream.cf/)\n2. [**TV Setup**](https://docs.cloudstream.cf/other-devices/tv/)\n3. [**Windows**](https://docs.cloudstream.cf/other-devices/windows/)\n4. [**Subtitles**](https://docs.cloudstream.cf/settings/subtitle/)\n5. [**Open Subtitles**](https://docs.cloudstream.cf/integrations/opensubtitles/)\n6. [**Anime Tracking**](https://docs.cloudstream.cf/integrations/animetracking/)\n7. [**Troubleshooting**](https://docs.cloudstream.cf/troubleshooting/)\n8. [**VPN**](https://docs.cloudstream.cf/more-stuff/vpn/)\n9. [**Developer**](https://docs.cloudstream.cf/devs/gettingstarted/)\n10 [**Bot cmds**](https://discord.com/channels/737724143126052974/1055359189465178143/)",
          color: 16777215,
          thumbnail: {
            url: "https://media.discordapp.net/attachments/1035159969332478035/1067146476775559190/jp8pcmU.png",
          },
        },
      ],
    });
  },
};
