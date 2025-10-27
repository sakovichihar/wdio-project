class PromotionsPage {

    get locatorsMap() {
        return {
          'действующую акцию 1': '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][1]',
          'действующую акцию 2': '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][2]',
          'завершенную акцию 1':'//div[@class = "actions__items"][2]//div[@class = "news-list__item"][1]',
          'завершенную акцию 2': '//div[@class = "actions__items"][2]//div[@class = "news-list__item"][2]'
        };
      }
}

module.exports = new PromotionsPage();