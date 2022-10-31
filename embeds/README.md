
# Embeds Extensions
```js
module.exports = new function main() {
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
## Embeds
Use [Discohook](https://discohook.org/) to create <svg width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> your embed

Scroll down when you are done editing your embed till you see **JSON Data Editor**

Click it, and copy "embeds" value, it should be an **Array of Embeds**
```json
{
  "content": null,
  "embeds": [
    {
      "description": "..",
      "color": null
    },
    {
      "description": "..",
      "color": null
    }
  ],
  "attachments": []
}
```


You should have something like this
```json
[
    {
      "description": "..",
      "color": null
    },
    {
      "description": "..",
      "color": null
    }
]
```
This above should be a value of embeds (Max 10 embeds) in the constructor we are exporting in the file

## Content

Max 2000 characters

## Files

Array of string has links to media to upload in the message

## Components

buttons shit

## onlyIDs

Array of strings has iDs of people allowed to use it

## messageUrl

String of a message url to literally send the same messaget



Value       | Description | Type
------      | ------ | -----
content   | Message content | String
embeds  | Message embeds ([use discohook to generate it as json](https://discohook.org)) (Max 10 embeds) | Array<[Embed Object](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object)>
files         | File should be less than 8mb | Array<String>
components | Buttons, Only redirect button will work | Array<[Button Object](https://discord.com/developers/docs/interactions/message-components#button-object)>
onlyIDs | Whitelist IDs and blacklist every other ID, Not required | Array<String>
messageUrl | Copys that messges values | String

<br><br><br>
Very good explanation thank u i know
