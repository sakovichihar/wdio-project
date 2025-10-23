class BonusPage {

    get requiredBonus() {
        return '//*[@id="birthday"]'
    }
}

module.exports = new BonusPage();