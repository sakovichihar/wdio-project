import { When } from '@wdio/cucumber-framework';
const HoverPromo = require('./../pageobjects/HoverPromo.js');
const { getLocator } = require('../element-mapped.js');

//
When('Я навожу на кнопку {string}', async function(section) {
    const button = HoverPromo.button[section]
    await this.button.moveTo();
})

When('Я нажимаю кнопку {string}', async function(section) {
    const button = HoverPromo.button[section]
    await button.click()
});

// если тест падает, а локатор внизу страницы, то можно поскроллить для отладки
When('Я скроллю страницу до {string}', async function(element) {
    const locator = getLocator(element)

    await locator.waitForDisplayed({ timeout: 5000 }); // сначала жду чтобы ебанный локатор появился в дом дереве
    await locator.scrollIntoView(); //потом скроллю ебучую страницу
});

//на всякий случай
When ('Я ожидаю заданное время', async function () {
    
    await browser.pause(5000)
}) 