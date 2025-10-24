class NewsPage {

    get elementMap() {
        return {
          'действующую акциию 1': '//*[@class="news-list__item"][1]',
          'действующую акциию 2': '//*[@class="news-list__item"][2]'
        };
      }
}

module.exports = new NewsPage();