import { When } from '@wdio/cucumber-framework';
const HoverPromo = require('./../pageobjects/HoverPromo.js');
const Header = require('../pageobjects/Header.js');
const UserData = require('../pageobjects/UserData.js');
const { getLocator } = require('../element-mapped.js');
require('dotenv').config();

When('Я навожу на кнопку {string} в {string}', async function(element, page) {
    const button = getLocator(element, page)
    await button.moveTo();
})

// When('Я нажимаю кнопку {string} в {string}', async function(section, pageName) {

//     const button = place.button[section]
//     await button.click()
// });

// When('Я ввожу {string} в {string}', async function(value, field){
     
//     const data = UserData.values[value]
//     const input = getLocator(field)
//     await input.setValue(data)
// })

// // если тест падает, а локатор внизу страницы, то можно поскроллить для отладки
// When('Я скроллю страницу {string} до {string}', async function(location, element) {
//     //добавить location
//     const locator = getLocator(element)
//     await locator.waitForDisplayed({ timeout: 5000 }); // сначала жду чтобы ебанный локатор появился в дом дереве
//     await locator.scrollIntoView(); //потом скроллю ебучую страницу
// });

// //на всякий случай
// When ('Я ожидаю заданное время', async function () {
    
//     await browser.pause(1000)
// })
