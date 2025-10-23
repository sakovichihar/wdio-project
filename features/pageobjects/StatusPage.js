class StatusPage {

    get requiredStatus() {
        return '//p[@class="status-title" and text()="elite"]' //p[@class="status-title" and contains(text(), "elite")]
    }
}

module.exports = new StatusPage();