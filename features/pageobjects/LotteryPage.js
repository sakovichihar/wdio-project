class LotteryPage {

    get locatorsMap() {
        return {
          'кнопку Узнать больше': '//*[@class="understand-more"]'
        };
  }
}

module.exports = new LotteryPage();