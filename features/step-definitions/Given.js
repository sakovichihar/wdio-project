import { Given } from '@wdio/cucumber-framework';
import HoverPromo from '../../pageobjects/HoverPromo.js';

Given('Я открываю главную страницу', async function() {
    window.open('https://roxcasino2990.com')
});

Given('Я навожу на кнопку Промо', async function() {
    await HoverPromo.moveToPromoButton()
})