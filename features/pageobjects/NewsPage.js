class NewsPage {

    get activeNews_1() { return '//*[@class="news-list__item"][1]' }
    get activeNews_2() { return '//*[@class="news-list__item"][2]' }
}

module.exports = new NewsPage();