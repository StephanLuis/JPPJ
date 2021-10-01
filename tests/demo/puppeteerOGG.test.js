// screenshot demo

// testing strategy has changed so that publishing bundles 
// is not required

const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('http://practisemaster.com/demos/puppeteerEmpty.html');

console.log(await page.content());

await page.evaluate(() => {
  let dom = document.querySelector('#EmptyDiv');



  var video = document.createElement("video");
  video.id = 'player';
  video.innerHTML = '<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">'

  dom.append(video);

});

await page.waitFor(5000);

await page.screenshot({ path: 'screenshot.png' });

await browser.close();

})();
