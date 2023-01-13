module.exports = {
  name: "nginx",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "How to use nginx with cloudstream",
          description:
            "NGINX is an open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability.",
          url: "https://cs3docs.pages.dev/integrations/nginx/",
          color: 38201,
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1013281939026890793/1041201937900642374/nginx.png",
          },
        },
      ],
    });
  },
};
