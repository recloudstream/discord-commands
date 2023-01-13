module.exports = {
  name: "marl",
  //onlyUsers: [""],
  async execute(message) {
    message.channel.send({
      //files: [""],
      embeds: [
        {
          title: "Superstream is overloaded! Again!! Very unexpected!!!",
          description:
            "Superstream's servers are over loaded because of too much user traffic. So, the superstream extension is down. Cloudstream developers can't fix the issue.\n**The Fix release date has no ETA. So don't report about the issue.**",
          color: null,
          thumbnail: {
            url: "https://images-ext-2.discordapp.net/external/u2Ki-fdmmSmwKm0ByB92Zk0LgWwj1hHJbsUYYIoZT80/https/raw.githubusercontent.com/recloudstream/cloudstream-extensions/master/SuperStream/icon.png",
          },
        },
      ],
    });
  },
};
