module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Disabled Extension",
      "description": "You can't enable a disabled extension. The extension is broken and there is no ETA for the fix. So, use the recommended sources.",
      "color": 16745728,
      "thumbnail": {
        "url": "https://cdn-icons-png.flaticon.com/512/7878/7878631.png"
      }
            }]
        })
    },
};
