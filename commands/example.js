module.exports = {
    name: "hi", 
    // name: String = Required (Name of the command)
    description: "Just a hi", 
    // description: String = Not required (Just a little information about the command)
    nonEligibleUsersChannel: "<channel_id>", 
    // nonEligibleUsersChannel: String = Required (For people against some rules such as user joined at and blacklisted to refer for them to use it in the right channel for them)
    onlyChannels: [], 
    // onlyChannels: Array<String> = Not required (limits the command to certain channels)
    onlyUsers: [], 
    // onlyUsers: Array<String> = Not required (limits the command to certain users)
    cooldown: 5,
    // cooldonw: Int (seconds) = Not required, and it should be above 5s
    async execute(message) { // Lastly which is the function to execute, execute is provided by message and args values
        message.channel.send("Hi")
    },
  };
  