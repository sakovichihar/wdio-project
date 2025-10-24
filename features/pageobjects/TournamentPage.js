class TournamentPage {

    get elementMap() {
        return {
          'турнир luckyleague': '//*[@data-tournament="luckyleague"]'
        };
      }
}

module.exports = new TournamentPage();