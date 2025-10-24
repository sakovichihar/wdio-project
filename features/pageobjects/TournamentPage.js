class TournamentPage {

    get locatorsMap() {
        return {
          'турнир luckyleague': '//*[@data-tournament="luckyleague"]'
        };
      }
}

module.exports = new TournamentPage();