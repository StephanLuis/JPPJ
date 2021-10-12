// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');

// jest.setTimeout(25000);

var resp = '200';

describe('H', () => {
  beforeAll(async () => {

   //  await page.waitForResponse(response => response.status() === 200)
    
    page.on('response', response => console.info(`👉 Response: ${response.url()}`));

    page.on('response', response => console.info(`👉 Response: ${response.status()}`));

    await page.goto('https://8000-fuchsia-leech-e3d1fb5t.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');
    // await page.goto('http://practisemaster.com/demos/puppeteerBrowserError.html');

//      await browser.close();

  //   await page.waitFor(20000); 

  })

  it('should not detect a requestfailed on page', async () => {

    console.info('In it resp = ' + resp);

    await expect(resp).toMatch('200');
  })
})
