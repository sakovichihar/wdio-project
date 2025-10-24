class StatusPage {
  
    get elementMap() {
        return {
          'статус ELITE': '//p[@class="status-title" and text()="elite"]'
        };
      }
}

module.exports = new StatusPage();