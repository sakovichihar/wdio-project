class StatusesPage {

    get eliteStatuses() {
        return $('//p[@class="status-title" and text()="elite"]') //p[@class="status-title" and contains(text(), "elite")]
    }
}

module.exports = new StatusesPage();