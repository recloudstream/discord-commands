module.exports = {
  name: "opensubs",
  async execute(message) {
    message.channel.send({
      embeds: [{
 "title": "Creating an account",
      "description": "[Go here](https://www.opensubtitles.com/en) and create an account.",
      "color": null,
      "image": {
        "url": "https://user-images.githubusercontent.com/57977673/194716796-c5556b8b-a0b7-4580-9054-f36d1304e545.png"
      }
    },
    {
      "title": "Adding Open Subtitles account in Cloudstream",
      "description": "**Settings > Account > OpenSubtitles >** Login with **username and password**",
      "color": null,
      "image": {
        "url": "https://user-images.githubusercontent.com/57977673/194716884-04860e09-7910-4216-bf26-52fbca4e0a86.png"
      }
    },
    {
      "title": "How to use Open subtitles",
      "description": "**Video player > sources> subtitles> Load from internet** and then search and apply",
      "color": null,
      "image": {
        "url": "https://user-images.githubusercontent.com/57977673/194716636-f16fe137-c2e6-4529-bfd8-b86214ab8843.png"
      }
    },
    {
      "color": null,
      "image": {
        "url": "https://cdn.discordapp.com/attachments/1008654622740729897/1029316063659315210/unknown.png"
      }
        
      }]
    })
  },
};
