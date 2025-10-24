class PromotionsPage {

    get locatorsMap() {
        return {
          '': '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][1]',
          '': '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][2]',
          '':'//div[@class = "actions__items"][2]//div[@class = "news-list__item"][1]',
          '': '//div[@class = "actions__items"][2]//div[@class = "news-list__item"][2]'
        };
      }
}

module.exports = new PromotionsPage();