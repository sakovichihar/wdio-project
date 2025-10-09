import { When } from '@wdio/cucumber-framework';
const HoverPromo = require('./../pageobjects/HoverPromo.js');
const { getLocator } = require('../element-mapped.js');

//
When('Я навожу на кнопку Промо', async function() {
    await HoverPromo.moveToPromoButton()
})

When('Я нажимаю кнопку {string}', async function(section) {
    const button = HoverPromo.button[section]
    await button.click()
});

When('Я скроллю страницу до {string}', async function(element) {
    const locator = getLocator(element)

    await locator.waitForDisplayed({ timeout: 5000 }); // сначала жду чтобы ебанный локатор появился в дом дереве
    await locator.scrollIntoView(); //потом скроллю ебучую страницу
});

When ('Я ожидаю заданное время', async function () {
    
    await browser.pause(5000)
}) 