class BonusPage {

    get locatorsMap() {
        return {
          'бонус Подарок на день рождения': '//*[@id="birthday"]' 
        };
    }
}

module.exports = new BonusPage();