class LotteryPage {

    get lotteriesMoreInfoButton() {
        return $('//*[@class="understand-more"]')
    }
}

module.exports = new LotteryPage();