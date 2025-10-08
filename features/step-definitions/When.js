import { When } from '@wdio/cucumber-framework';
const HoverPromo = require('./../pageobjects/HoverPromo.js');

When('Я навожу на кнопку Промо', async function() {
    await HoverPromo.moveToPromoButton()
})

When('Я нажимаю кнопку {string}', async function(section) {
    const button = HoverPromo.button[section]
    await button.click()
});


