import { Then } from '@wdio/cucumber-framework';
const { getLocator } = require('../element-mapped.js');

Then('Я вижу {string}', async function (element) {

    const locator = getLocator(element)
    await locator.scrollIntoView(); //скроллю ебучую страницу

    await locator.waitForDisplayed({ timeout: 5000 }); // ебанул таймаут

    await expect(locator).toBeDisplayed();
});