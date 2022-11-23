class AsyncConstructor {
	constructor(args) {
	    this.args = args;
	    return (async (inputs) => {
            var repos = [
                {
                    name: "English",
                    url: "https://l.cloudstream.cf/eng",
                    emoji: "🇬🇧",
                    shortcut: "eng"
                },
                {
                    name: "Multi",
                    url: "https://l.cloudstream.cf/multi",
                    emoji: "🌏",
                    shortcut: "multi"
                },
                {
                    name: "Arabic",
                    url: "https://l.cloudstream.cf/arab",
                    emoji: "🇯🇴",
                    shortcut: "arab"
                },
                {
                    name: "Hexated",
                    url: "https://l.cloudstream.cf/hexa",
                    emoji: "🌏",
                    shortcut: "hexa"
                },
                {
                    name: "DarkDemon",
                    url: "https://l.cloudstream.cf/drepo",
                    emoji: "🇮🇳",
                    shortcut: "drepo"
                },
                {
                    name: "LikeDev",
                    url: "https://l.cloudstream.cf/likrepo",
                    emoji: "🇮🇳",
                    shortcut: "likrepo"
                },
                {
                    name: "NSFW",
                    url: "https://l.cloudstream.cf/nsfw",
                    emoji: "🔞",
                    shortcut: "nsfw"
                },
                {
                    name: "Stormunblessed",
                    url: "https://l.cloudstream.cf/storm",
                    emoji: "🇪🇸",
                    shortcut: "storm"
                }
            ]
            if(inputs?.length > 0 && inputs[0].startsWith("http")) {
                repos = [{name: "Custom", url: inputs[0]}]
            }
            this.components = [
                {
                    "components": [
                        {
                            "custom_id": "provider_select",
                            "max_values": 1,
                            "min_values": 1,
                            "options": repos.map(value=> {
                                return {
                                    "label": value.name,
                                    "value": value.url,
                                    "emoji": value.emoji
                                }
                            }),
                            "placeholder": "Choose a repository",
                            "type": 3
                        }
                    ],
                    "type": 1
                }
            ]
            this.embeds = [{
                "title": "Select to view providers",
                "color": null
            }];
            this.allowedChannels = ["737729263221997619"]
	    return this;
         })(args);
	}
}
module.exports = AsyncConstructor;
