
// use reflect from demo/PMinstance.test.js to help with reporting 
// on objects

const puppeteer = require('puppeteer');

(async () => {

const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://8000-purple-gibbon-iek8tox3.ws-eu18.gitpod.io/dist/puppeteerPMogg.html');

// var  pml = await page.evaluate(() => pmHelpers.p);

// await page.waitForTimeout(5000);
// page.waitForNavigation({timeout: 10000})

 await new Promise(r => setTimeout(r, 5000));

var    pml = await page.evaluate(() => PMinstance_player.loop);
   


console.log(pml);
    console.log(await page.evaluate(() => PMloop));

    console.log(Object.getOwnPropertyNames( pml));

console.log("JSON: " + JSON.stringify(pml));

console.table(pml);

var propArray = Object.getOwnPropertyNames( pml);

propArray.forEach(element => console.log(element));
console.log('bob');

await browser.close();
})();
