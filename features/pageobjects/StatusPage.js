class StatusPage {
  
    get locatorsMap() {
        return {
          'статус ELITE': '//p[@class="status-title" and text()="elite"]'
        };
      }
}

module.exports = new StatusPage();