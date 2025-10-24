class PromotionsPage {

    get activePromotions_1(){ return '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][1]'}
    get activePromotions_2(){ return '//div[@class = "actions__items"][1]//div[@class = "news-list__item"][2]'}
    get expiredPromotions_1(){ return '//div[@class = "actions__items"][2]//div[@class = "news-list__item"][1]'}
    get expiredPromotions_2(){ return '//div[@class = "actions__items"][2]//div[@class = "news-list__item"][2]'}
}

module.exports = new PromotionsPage();