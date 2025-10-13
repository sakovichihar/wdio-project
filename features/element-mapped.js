const BonusPage = require('./pageobjects/BonusPage.js');
const LotteryPage = require('./pageobjects/LotteryPage.js');
const StatusPage = require('./pageobjects/StatusPage.js');
const TournamentPage = require('./pageobjects/TournamentPage.js');
const BonusPage = require('./pageobjects/BonusPage.js');
const LotteryPage = require('./pageobjects/LotteryPage.js');
const CashbackPage = require('./pageobjects/CashbackPage.js');
const NewsPage = require('./pageobjects/NewsPage.js');
const PromotionsPage = require('./pageobjects/PromotionsPage.js');

//здеся я маплю геттеры для получению локаторов для then шагов 
const elementObject = {
    'статус ELITE': StatusPage.requiredStatus,
    'турнир luckyleague': TournamentPage.requiredTournament,
    'бонус Подарок на день рождения': BonusPage.requiredBonus,
    'кнопку Узнать больше': LotteryPage.lotteriesMoreInfoButton,
    'блок Как получить кешбэк': CashbackPage.blockHowGetCashback,
    'активную новость 1': NewsPage.activeNews_1,
    'активную новость 2': NewsPage.activeNews_2,
    'действующую акциию 1': PromotionsPage.activePromotions_1,
    'действующую акциию 2': PromotionsPage.activePromotions_2,
    'завершенную акцию 1': PromotionsPage.expiredPromotions_1,
    'завершенную акцию 1': PromotionsPage.expiredPromotions_2
}

function getLocator(elementName) {
    const locator = elementObject[elementName];

    return locator
}

module.exports = { getLocator };