class LotteryPage {

    get elementMap() {
        return {
          'кнопку Узнать больше': '//*[@class="understand-more"]'
        };
  }
}

module.exports = new LotteryPage();