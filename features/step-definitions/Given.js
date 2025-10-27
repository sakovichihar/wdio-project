import { Given } from '@wdio/cucumber-framework';
require('dotenv').config();


Given('Я открываю главную страницу {string} на окружении {string}', async function(project, env) {

    const key = `${project}_${env}`
    const url = process.env[key];
});
