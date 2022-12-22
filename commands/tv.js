module.exports = {
  name: "tv",
  async execute(message) {
    message.channel.send({
      //files: ["https://cdn.discordapp.com/attachments/1036144578690031726/1037765163127935016/tv.mp4"],
      embeds: [{
        "title": "TV installation guide",
        "description": "You can read this page to get an idea on how to install cs3 app and repos on TV.",
        "url": "https://discord.com/channels/737724143126052974/1055347828794339378/1055347836201488404",
        "color": 16711680,
        "thumbnail": {
          "url": "https://cdn-icons-png.flaticon.com/512/716/716429.png"
        }
      }]
    })
  },
};
