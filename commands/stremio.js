module.exports = {
  name: "stremio",
  async execute(message) {
    message.channel.send({
      //files: ["https://cdn.discordapp.com/attachments/1016716040648015972/1037956353181880330/stremio.mp4"],
      embeds: [
        {
          title: "Adding stremio addon for catalogue",
          description:
            "The Stremio extension is still experimental. Don't expect a Stremio like experience. You can add sources in CS3 using this method, but it'll be only for catalogue (most of the time). So, when you will try to play the eps, it will show: No link found.",
          url: "https://docs.cloudstream.cf/integrations/stemiorelated/",
          color: 7084972,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1008654622740729897/1040154389358329856/stremio.png",
          },
        },
      ],
    });
  },
};
