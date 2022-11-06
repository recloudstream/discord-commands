
# Embeds Extensions
```js
module.exports = function main() {
  this.content = "Hello"
  this.files = ["https://image.png", "https://video.mp4"]
  this.components = [
    {
        "type": 1,
        "components": [
            {
                "type": 2,
                "label": "Click me!",
                "url": "https://discord.com/developers/docs/interactions/message-components#action-rows",
                "style": 5,
                "emoji": "😀"
            }
        ]
    }
  ]
  this.embeds = [{
      "description": "..",
    },
    {
      "description": "..",
    }]
}
```

The JS file should export a constructor that has values such as embeds, content...
<br>
<br>

Value       | Description | Type
------      | ------ | -----
content   | Message content | String
embeds  | Message embeds ([use discohook to generate it as json](https://discohook.org)) (Max 10 embeds) | Array<[Embed Object](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object)>
files         | File should be less than 8mb | Array<String>
components | Buttons, Only redirect button will work | Array<[Button Object](https://discord.com/developers/docs/interactions/message-components#button-object)>
onlyIDs | Whitelist IDs and blacklist every other ID, Not required | Array<String>
messageUrl | Copys that messges values | String
  
Very good explanation thank u i know
