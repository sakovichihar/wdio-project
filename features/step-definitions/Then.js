import { Then } from '@wdio/cucumber-framework';
const { getLocator } = require('../element-mapped.js');

Then('Я вижу {string} на странице {string}', async function (element, page) {

    const locator = await getLocator(element, page)
    await expect(locator).toBeDisplayed();
}); 