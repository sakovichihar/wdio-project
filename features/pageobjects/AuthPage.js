class AuthPage {

    get emailField() {return '//input[@data-test = "email_field"]';}
    get passwordField() {return '//input[@data-test = "passwd_field"]';}
    get enterButton() {return '//button[@data-test="auth-form-btn"]';}
}

module.exports = new AuthPage();