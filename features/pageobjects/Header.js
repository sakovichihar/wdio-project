class Header {

    get button() {
    return {
      'Вход': '//*[@data-test = "main_signin"]',
      'Войти': '//button[@data-test="auth-form-btn"]',
      'Профиль': '//*[@data-test="main_profile_login_name"]'
        }
    }
}

module.exports = new Header();