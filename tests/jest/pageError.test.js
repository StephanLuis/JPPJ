// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');
var refErrtxt = 'bob';

describe('PageError', () => {
  beforeAll(async () => {

    // page.on('console', msg => console.log('PAGE LOG:', msg.text)); 


    page.on('pageerror', refErr => {
      console.log(refErr.message);
      refErrtxt = refErr.message;
    });


    await page.goto('https://8000-fuchsia-leech-e3d1fb5t.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');
    // await page.goto('http://practisemaster.com/demos/puppeteerBrowserError.html');



    // await page.waitFor(5000); 



  })

  it('should not detect an Error on page', async () => {
    await expect(refErrtxt).toMatch('');
  })
})
