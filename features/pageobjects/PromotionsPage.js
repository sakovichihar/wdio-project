class PromotionsPage {

    get activePromotions_1(){
        return $('//*[@class="promotions"]/div[1]/div[1]') 
    }
    get activePromotions_2(){
        return $('//*[@class="promotions"]/div[1]/div[2]')
    }
    get expiredPromotions_1(){
        return $('//div[@class="black-rulls black-rulls-h"]/following-sibling::div[@class="actions__items"]/div[1]')
    }
    get expiredPromotions_2(){
        return $('//div[@class="black-rulls black-rulls-h"]/following-sibling::div[@class="actions__items"]/div[2]')
    }
}

module.exports = new PromotionsPage();