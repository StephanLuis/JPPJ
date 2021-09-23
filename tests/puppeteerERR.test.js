const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text));
  page.on('pageerror', error => {
    console.log(error.message);
   });
  page.on('response', response => {
    console.log(response.status, response.url);
  });
  page.on('requestfailed', request => {
    console.log(request.failure().errorText, request.url);
  });
  await page.goto('http://practisemaster.com/demos/puppeteerBrowserError.html');
  await page.waitFor(5000);
  await browser.close();
})();
