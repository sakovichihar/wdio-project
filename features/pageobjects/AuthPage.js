class AuthPage {

    get elementMap() {
        return {
          'Поле e-mail': '//input[@data-test = "email_field"]',
          'Поле password': '//input[@data-test = "passwd_field"]',
          'Войти': '//button[@data-test="auth-form-btn"]'
        };
    }
}

module.exports = new AuthPage();