class Header {

  get locatorsMap() {
        return {
          'Вход': '//*[@data-test = "main_signin"]',
          'Профиль': '//*[@data-test="main_profile_login_name"]'
        };
    }
}

module.exports = new Header();