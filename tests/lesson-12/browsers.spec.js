// browser - chromium / firefox / webkit
// context - browser context (cookies / extensions)
// page - tab of the browser

const { test, chromium, firefox, webkit } = require("@playwright/test");

test.describe.only("Browsers Tests", () => {

    test('Chromium Test', async() => {

        const browser = await chromium.launch({channel: 'chrome'});
        const context = await browser.newContext({viewport: {width: 1850, height: 900}});
        const page = await context.newPage();

        await page.goto('https://playwright.dev/');

        await page.waitForTimeout(3000);
    })

    test('Firefox Test', async() => {
        const browser = await firefox.launch();
        const context = await browser.newContext({viewport: {width: 1850, height: 900}});
        const page = await context.newPage();

        await page.goto('https://playwright.dev/');

        await page.waitForTimeout(3000);
    })

    test('Webkit Test', async() => {
        const browser = await webkit.launch();
        const context = await browser.newContext({viewport: {width: 1850, height: 900}});
        const page = await context.newPage();

        await page.goto('https://playwright.dev/');

        await page.waitForTimeout(3000);
    })

    test('Page Test', async({page}) => {
      
        await page.goto('https://playwright.dev/');
        await page.waitForTimeout(3000);
    })
})

