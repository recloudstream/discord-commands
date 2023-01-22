module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Use warp to bypass geo restriction",
          description:
            "You can use **WARP** if DOH is not bypassing the geo restriction. WARP is a hassle-free alternative which is free. This VPN is for bypassing geo restriction. Not for privacy (1.1.1.1 will show your real IP to a site that has Cloudflare).\n\nIf you want a VPN that respects your privacy, you can use [**Winscribe**](https://play.google.com/store/apps/details?id=com.windscribe.vpn) (free) or [**Mullvad**](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) (paid).",
          url: "https://docs.cloudstream.cf/more-stuff/vpn/#cloudflare-warp",
          color: 16740352,
          thumbnail: {
            url: "https://play-lh.googleusercontent.com/39xbI_gFcmGEIl6JEAGhJQKv8GBjR_RFyJ6qhrFfA9CUOKZU2clSs7uo81e30zPGtg",
          },
        },
      ],
    });
  },
};
