class AsyncConstructor {
    constructor(args) {
        this.args = args;
        return (async (inputs) => {
            var repos = [
                {
                    name: "English",
                    url: "https://l.cloudstream.cf/eng",
                },
                {
                    name: "Multi",
                    url: "https://l.cloudstream.cf/multi",
                },
                {
                    name: "Arabic",
                    url: "https://l.cloudstream.cf/arab",
                },
                {
                    name: "Hexated",
                    url: "https://l.cloudstream.cf/hexa",
                },
                {
                    name: "DarkDemon",
                    url: "https://l.cloudstream.cf/drepo",
                },
                {
                    name: "LikeDev",
                    url: "https://l.cloudstream.cf/likrepo",
                },
                {
                    name: "NSFW",
                    url: "https://l.cloudstream.cf/nsfw",
                } ,
                {
                    name: "Stormunblessed",
                    url: "https://raw.githubusercontent.com/Stormunblessed/stormunblessed-cs3/master/repo.json",
                } ,
                {
                    name: "Kamy",
                    url: "https://l.cloudstream.cf/kamy",
                }
            ]
            if (inputs?.length > 0 && inputs[0].startsWith("http")) {
                repos = [{ name: "Custom", url: inputs[0] }]
            }
            this.components = [
                {
                    "components": [
                        {
                            "custom_id": "provider_select",
                            "max_values": 1,
                            "min_values": 1,
                            "options": repos.map(value => {
                                return {
                                    "label": value.name,
                                    "value": value.url
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
