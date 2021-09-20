const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('http://practisemaster.com/demos/VimeoDomLockLinks.html');

// var  pml = await page.evaluate(() => pmHelpers.p);

// await page.waitForTimeout(5000);
// page.waitForNavigation({timeout: 10000})

 await new Promise(r => setTimeout(r, 5000));

var    pml = await page.evaluate(() => PMinstance_playerLI.loop);
   


console.log(pml);
    console.log(await page.evaluate(() => PMloop));

    console.log(Object.getOwnPropertyNames( pml));

console.log("JSON: " + JSON.stringify(pml));

console.table(pml);

var propArray = Object.getOwnPropertyNames( pml);

propArray.forEach(element => console.log(element));
console.log('bob');

await browser.close();