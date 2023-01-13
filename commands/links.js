module.exports = {
  name: "links",
  async execute(message) {
    message.channel.send({
      embeds: [
        {
          title: "Cloudstream Related Links",
          description:
            "<:7R:1037622920811384903>  **Site**: https://cloudstream.cf/\n\n<:puzzleplus:1041119684478644234>  **Repos**: https://cloudstream.cf/repos\n\n<:rentry:1037775510324916326> **Mirror**: https://rentry.org/cs3/\n\n<:github:1037775478234292285> **Github **: https://github.com/recloudstream/cloudstream/releases\n\n:package: **Archive **: https://github.com/recloudstream/cloudstream-archive\n\n<:gitdab:1037775447708160091> **Gitdab **: https://gitdab.com/recloudstream\n\n<:matrix:1037776230759551017> **Matrix**: https://matrix.to/#/#lagrapps:matrix.org",
          color: 16711680,
        },
      ],
    });
  },
};
