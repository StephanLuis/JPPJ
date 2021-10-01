'use strict';

const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://8000-purple-gibbon-iek8tox3.ws-eu18.gitpod.io/dist/VimeoDomLockLinks.html');

 // console.log(await page.content());
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();