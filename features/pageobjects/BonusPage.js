class BonusPage {

    get elementMap() {
        return {
          'бонус Подарок на день рождения': '//*[@id="birthday"]' 
        };
    }
}

module.exports = new BonusPage();