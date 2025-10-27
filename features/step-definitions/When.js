import { When } from '@wdio/cucumber-framework';
const UserData = require('../pageobjects/UserData.js');
const { getLocator } = require('../element-mapped.js');
require('dotenv').config();

When('Я навожу на кнопку {string} в {string}', async function(element, page) {
    const button = await getLocator(element, page)
    await button.moveTo();
})

When('Я нажимаю кнопку {string} в {string}', async function(element, page) {

    const button = await getLocator(element, page)
    await button.click()
});

When('Я ввожу {string} в {string} на странице {string}', async function(value, field, page){
    
    const data = UserData.values[value]
    const input = await getLocator(field, page)
    await input.setValue(data)
})

// если тест падает, а локатор внизу страницы, то можно поскроллить для отладки
When('Я скроллю страницу {string} до {string}', async function(page, element) {

    const locator = await getLocator(element, page)
    await locator.waitForDisplayed({ timeout: 3000 }); // сначала жду чтобы ебанный локатор появился в дом дереве
    await locator.scrollIntoView(); //потом скроллю ебучую страницу
});

//на всякий случай
When ('Я ожидаю заданное время {string} секунды', async function (seconds) {
    const time = seconds*1000 
    await browser.pause(time)
})
