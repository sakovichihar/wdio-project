const BonusPage = require('./pageobjects/BonusPage.js');
const LotteryPage = require('./pageobjects/LotteryPage.js');
const StatusPage = require('./pageobjects/StatusPage.js');
const TournamentPage = require('./pageobjects/TournamentPage.js');
const CashbackPage = require('./pageobjects/CashbackPage.js');
const NewsPage = require('./pageobjects/NewsPage.js');
const PromotionsPage = require('./pageobjects/PromotionsPage.js');
const ProfilePage = require('./pageobjects/ProfilePage.js');
const AuthPage = require('./pageobjects/AuthPage.js');

class PageMapped {
    constructor() {
      this.pages = {
        'Авторизация': AuthPage,
        'Бонусы': BonusPage,
        'Кешбэк': CashbackPage,
        'Хэдер': Header,
        'Ховер': HoverPromo,
        'Лотереи': LotteryPage,
        'Новости': NewsPage,
        'Профиль': ProfilePage,
        'Акции': PromotionsPage,
        'Статус': StatusPage,
        'Турнир': TournamentPage,
      };
    }
  }

function getLocator(elementName, pageName) {

  const pageMapped = new PageMapped()
//здеся находим нужную страницу по названию
  const selectedPage = pageMapped.pages[pageName]
//здеся по названию ищем нужный xpath
  const locatorString = selectedPage.locatorsMap[elementName];
//здеся уже обворачиваем переменную как локатор и отдаем в return
  const locator = $(locatorString)

  return locator
}

module.exports = { getLocator };