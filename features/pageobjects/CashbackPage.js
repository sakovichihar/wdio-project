class CashbackPage {

    get blockHowGetCashback() {
        
        return $('//*[@id="contentBox"]//h2[contains(text(), "Как получить Кешбэк")]')
    }
}

module.exports = new CashbackPage();