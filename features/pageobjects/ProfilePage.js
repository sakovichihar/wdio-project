class ProfilePage {

    get confirmedEmailLabel() {
        return $('//span[contains(@class, "text--green") and contains ( ., "Подтверждена")]');
    }
    get statusNew() {
        return $('//div[contains(@class, "col-sm-4") and .//p[@class="label-input" and contains(., "New")]]');
    }

}

module.exports = new ProfilePage();