class StatusesPage {

     get eliteStatus () {
        return $('//p[@class="status-title" and contains(text(), "elite")]');
    }

    async verifyEliteStatus() {
        const element = await this.eliteStatus;
        return await element.getText();}
}

export default new StatusesPage();