class Header {

    get signInButton() { return '//*[@data-test = "main_signin"]'}
    get enterButton() { return '//button[@data-test="auth-form-btn"]'}
    get profileButton() { return '//*[@data-test="main_profile_login_name"]'}

}

module.exports = new Header();