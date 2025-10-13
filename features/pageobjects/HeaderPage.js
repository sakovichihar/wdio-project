class HeaderPage {

    get signinButton() {
        return $('//*[@data-test = "main_signin"]');
    }
    get profileButton() {
        return $('//*[@data-test="main_profile_login_name"]');
    }
}

module.exports = new HeaderPage();