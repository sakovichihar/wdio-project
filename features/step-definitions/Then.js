import { Then } from '@wdio/cucumber-framework';
const { getLocator } = require('../element-mapped.js');

Then('Я вижу {string}', async function (element) {

    const locator = getLocator(element)
    await expect(locator).toBeDisplayed();
}); 

Then('Я вижу {string} и {string}', async function(element_1, element_2){

    const locator_1 = getLocator(element_1)
    const locator_2 = getLocator(element_2)
    await expect(locator_1).toBeDisplayed();
    await expect(locator_2).toBeDisplayed();
});