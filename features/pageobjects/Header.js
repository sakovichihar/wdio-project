class Header {

  get locatorsMap() {
        return {
          'Вход': '//*[@data-test = "main_signin"]',
          'Профиль': '//*[@data-test="main_profile_login_name"]//*[contains(@href ,"/profile")]'
        };
    }
}

module.exports = new Header();