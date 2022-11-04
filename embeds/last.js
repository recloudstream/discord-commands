module.exports = function main(args, message) {
    var deletedMessage = require("./../events/lastDeletedMessage.js").deletedMessagesArray
    .filter(value=> value.message.channelId == message.channelId).at(-1)
    if(deletedMessage == null) return this.content = "No message got deleted"
    this.embeds = [
        {
            "description": `**${deletedMessage.message.content}**`,
            "color": null,
            "author": {
                "name": "Last message deleted was by "+ deletedMessage.message.author.username,
                "icon_url": deletedMessage.message.author.avatarURL(),
            }
        }
    ]
}
