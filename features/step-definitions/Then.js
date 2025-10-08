import { Then } from '@wdio/cucumber-framework';
import StatusesPage from '../../pageobjects/StatusesPage.js';
const { getLocator } = require('../element-mapped.js');

Then('Я вижу {string}', async function (element) {
    const locator = getLocator(element)
    await expect(locator).toBeDisplayed();
});