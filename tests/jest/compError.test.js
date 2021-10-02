// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');
var err;

describe('Wiki', () => {
  beforeAll(async () => {

    // page.on('console', msg => console.log('PAGE LOG:', msg.text)); 

    page.on('pageerror', error => { err = error.message; });

    // page.on('requestfailed', request => { console.log(request.failure().errorText, request.url); }); 


    await page.goto('https://8000-purple-gibbon-iek8tox3.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');
    // await page.goto('http://practisemaster.com/demos/puppeteerBrowserError.html');



    // await page.waitFor(5000); 

    await browser.close();

  })

  it('should not detect an Error on page', async () => {
    await expect(err).toMatch('');
  })
})
