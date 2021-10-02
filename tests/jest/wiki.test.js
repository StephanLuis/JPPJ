// one or the other require 

// const puppeteer = require('puppeteer');
const puppeteer = require('expect-puppeteer');

describe('Wiki', () => {
  beforeAll(async () => {
    await page.goto('https://wikipedia.com')
  })

  it('should display "Wikipedia" text on page', async () => {
    await expect(page).toMatch('Wikipedia')
  })
})
