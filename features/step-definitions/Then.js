import { Then } from '@wdio/cucumber-framework';
const { getLocator } = require('../element-mapped.js');

Then('Я вижу {string}', async function (element) {

    const locator = getLocator(element)
    await expect(locator).toBeDisplayed();
}); 