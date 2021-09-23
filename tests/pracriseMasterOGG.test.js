const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('http://practisemaster.com/demos/puppeteerEmpty.html');

console.log(await page.content());

await page.evaluate(() => {
    let dom = document.querySelector('#EmptyDiv');
  
  dom.insertAdjacentHTML('beforebegin', '<video id="player" class="pm">  <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"><video>');
  
  var pmVid = new pmHelpers.pp('#player');
  
   
 });

await page.waitFor(5000);

await page.screenshot({path: 'screenshot.png'});

await browser.close();
})();
