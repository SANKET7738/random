const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="cm-cr-dp-review-list"]');
    const txt = await el.getProperty('textContent');
    const reviews = await txt.jsonValue();

    console.log({ reviews });

    browser.close();
}

scrapeProduct('https://www.amazon.in/Apple-iPhone-Pro-Max-64GB/dp/B07XVLMZHH/ref=sr_1_3?crid=3KN44KC41QC2U&dchild=1&keywords=iphone+11+pro&qid=1600165057&sprefix=ip%2Caps%2C305&sr=8-3');