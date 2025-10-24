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

// class pageMapped {
//     constructor() {
//         this.pages = {
//           авторизация: AuthPage,
//           бонусы: BonusPage,
//           кешбэк: CashbackPage,
//           хэдер: Header,
//           hover: HoverPromo, // 'ховер' на англ. для краткости, или 'ховер'
//           лотереи: LotteryPage,
//           новости: NewsPage,
//           профиль: ProfilePage,
//           акции: PromotionsPage,
//           статус: StatusPage,
//           турнир: TournamentPage,
//           пользователь: UserData // Для данных
//         };
//       }
//     }


function getLocator(pageName, elementName) {
    const locator = elementObject[elementName];

    return $(locatorString)
    }

module.exports = { getLocator };