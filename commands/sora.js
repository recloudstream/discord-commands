module.exports = function main() {
  this.embeds = [{
  "title": "Sorastream",
      "description": "Sorastream is a MultiAPI based source that scrapes **A LOT** of sites and uses tmdb for catalogue.",
      "color": 11485,
      "thumbnail": {
        "url": "https://raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/master/SoraStream/Icon.png"
      }
    },
    {
      "title": "How to install Sorastream",
      "description": "**Step 1:** Install [**Hexated**](https://cs.repo/?raw.githubusercontent.com/hexated/cloudstream-extensions-hexated/builds/repo.json) repo.\n**Step 2:** Click on the Hexated repo.\n**Step 3:** Scroll down the source list and install sorastream.",
      "color": 11485,
      "image": {
        "url": "https://cdn.discordapp.com/attachments/1008207706143871067/1047801841729159198/4HrnIIn.png"
      }
    },
    {
      "title": "FAQ",
      "description": "**1. The episode loading is taking too long**\nAs it scrapes a lot of sites, it takes time to load all of them. Skip loading after 3-5 seconds.\n**2. Some sources are not loading**\nSora has some geo restricted sources. Use vpn to access those sources.\n**3. Some titles are showing \"No links found\"**\nSora uses tmdb for catalogue, not the sources. So, it may show titles that no site has.",
      "color": 11485
  }]
}
