import { When } from '@wdio/cucumber-framework';
import HoverPromo from '../../pageobjects/HoverPromo.js';

When('Я навожу на кнопку Промо', async function() {
    await HoverPromo.moveToPromoButton()
})

When('Я нажимаю кнопку {string}', async function(section) {
    const button = this.HoverPromo.button[section]
    await button.click()
});

