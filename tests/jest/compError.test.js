// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');
var err = 'bob';

describe('RequestFailed', () => {
  beforeAll(async () => {

    // page.on('console', msg => console.log('PAGE LOG:', msg.text)); 

    //  page.on('pageerror', error => { err = error.message; });

    page.on('requestfailed', request => {
      console.log(request.failure().errorText, request.url);
      err = request.failure().errorText;
    });


    await page.goto('https://8000-fuchsia-leech-e3d1fb5t.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');
    // await page.goto('http://practisemaster.com/demos/puppeteerBrowserError.html');



    // await page.waitFor(5000); 



  })

  it('should not detect a requestfailed on page', async () => {
    await expect(err).toMatch('');
  })
})
