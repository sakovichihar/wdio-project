class ProfilePage {
  
    get elementMap() {
        return {
          'почта подтвержденна': '//span[contains(@class, "text--green") and contains ( ., "Подтверждена")]',
          'статус NEW': '//div[contains(@class, "col-sm-4") and .//p[@class="label-input" and contains(., "New")]]'
        };
      }
}

module.exports = new ProfilePage();