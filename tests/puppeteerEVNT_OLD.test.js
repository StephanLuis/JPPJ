const puppeteer = require('puppeteer');
(async () => {

  waitForEvent('pmControlsReady', 30)

})();

/**
 * Wait for the browser to fire an event (including custom events)
 * @param {string} eventName - Event name
 * @param {integer} seconds - number of seconds to wait.
 * @returns {Promise} resolves when event fires or timeout is reached
 */
 async function waitForEvent(eventName, seconds) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  seconds = seconds || 30;

  // use race to implement a timeout
  return Promise.race([

      // add event listener and wait for event to fire before returning
      page.evaluate(function(eventName) {
          return new Promise(function(resolve, reject) {
              window.addEventListener(eventName, function(e) {
                  resolve(); // resolves when the event fires
              });
          });
      }, eventName),

      // if the event does not fire within n seconds, exit
      page.waitForTimeout(seconds * 1000)
  ]);
}