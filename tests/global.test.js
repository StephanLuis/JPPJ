const puppeteer = require('puppeteer');

let _browser;
let _page;
puppeteer
 .launch()
 .then(browser => (_browser = browser))
 .then(browser => (_page = browser.newPage()))
 .then(page => page.goto('http://practisemaster.com/demos/VimeoDomLockLinks.html'))
 .then(() => _page)
 .then((page) => {
    return page.evaluate(() => {
      return window.PMinstance_playerLI;
    });
  })
  .then((PMinstance_playerLI) => {
    console.log(PMinstance_playerLI); // Should output the value
  })
  .then(() => _browser.close());;