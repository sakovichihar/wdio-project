class CashbackPage {

    get elementMap() {
        return {
          'блок Как получить кешбэк': '//*[@id="contentBox"]//h2[contains(text(), "Как получить Кешбэк")]'
        };
    }
}

module.exports = new CashbackPage();