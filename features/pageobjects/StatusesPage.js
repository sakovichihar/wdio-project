class StatusesPage {

    get eliteStatuses() {
        return $('//p[@class="status-title" and contains(text(), "elite")]')
    }
}

export default new StatusesPage();