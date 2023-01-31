module.exports = {
    name: "marl",
    //onlyUsers: [""],
    async execute(message) {
        message.channel.send({
            //files: [""],
            embeds: [{
"title": "Sorastream Lite",
      "description": "Sorastream lite is bundled w/ the Sorastream extension. It's a trimmed down version of sora as the name suggests. It only contains sites with stream options. No DDL sites (UHD, FDM, MoviezAdd etc.) will be there to reduce the link loading time.",
      "color": 13311
            }]
        })
    },
};
