class BalancePage {

    get locatorsMap() {
        return {
          'Закрыть': '//div[@class="c-modal__close-ic-wr"]'
        };
      }
}

module.exports = new BalancePage();