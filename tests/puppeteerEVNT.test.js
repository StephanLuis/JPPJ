 'use strict';

 const puppeteer = require('puppeteer');
 
 (async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
 
// Expose a handler to the page
await page.exposeFunction('onCustomEvent', ({ type, detail }) => {
  console.log(`Event fired: ${type}, detail: ${detail}`);
});

// listen for events of type 'status' and
// pass 'type' and 'detail' attributes to our exposed function
await page.evaluateOnNewDocument(() => {
  window.addEventListener('status', ({ type, detail }) => {
      window.onCustomEvent({ type, detail });
  });
});

await page.goto('https://puppet.azurewebsites.net/puppeteer/soEvntSingle.html');
// await page.waitFor(3000);
 await browser.close();
 })();