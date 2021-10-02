// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');

var pml;

describe('PMinstance_player', () => {
  beforeAll(async () => {
    
    await page.goto('https://8000-purple-gibbon-iek8tox3.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');

    // var  pml = await page.evaluate(() => pmHelpers.p);

    // await page.waitForTimeout(5000);
    // page.waitForNavigation({timeout: 10000})
// delay cannot be more than 5s 
    await new Promise(r => setTimeout(r, 2000));

    pml = await page.evaluate(() => PMinstance_player.loop);
  })

  it('should be loop.id is "player" on page', async () => {
    await expect(pml.id).toMatch('player')
  })
})
