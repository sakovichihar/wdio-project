const BonusPage = require('./pageobjects/BonusPage.js');
const LotteryPage = require('./pageobjects/LotteryPage.js');
const StatusPage = require('./pageobjects/StatusPage.js');
const TournamentPage = require('./pageobjects/TournamentPage.js');
const CashbackPage = require('./pageobjects/CashbackPage.js');
const NewsPage = require('./pageobjects/NewsPage.js');
const PromotionsPage = require('./pageobjects/PromotionsPage.js');
const ProfilePage = require('./pageobjects/ProfilePage.js');
const AuthPage = require('./pageobjects/AuthPage.js');

//здеся я маплю геттеры для получению локаторов для then шагов 
// этот костыль надо переделать под что-то общее, чтобы маппились не только xpath 
// для then шагов, но и всё xpath 

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

function getLocator(pageName, elementName) {

  const pageMapped = new PageMapped();
//здеся находим нужную страницу по названию
  const pageInstance = pageMapped.pages[pageName];
//здеся по названию ищем нужный xpath
  const elementMap = pageInstance.elementMap[elementName];
//здеся уже обворачиваем переменную как локатор и отдаем в return
  const locator = $(elementMap)
  return locator;
}

module.exports = { getLocator };