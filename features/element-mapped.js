const StatusesPage = require('../features/pageobjects/StatusesPage.js');

const elementObject = {
    'статус ELITE': StatusesPage.eliteStatuses
}

function getLocator(elementName) {
    const locator = elementObject[elementName];

    return locator
}

module.exports = { getLocator };