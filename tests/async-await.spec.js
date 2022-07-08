const {test, expect, firefox, chromium, webkit} = require('@playwright/test');

test.afterEach(async({page}) => {
    // await page.screenshot({path: 'asyncscreenshot.jpg'});
})

test('Test Title', async ({page}) => {

    // await 1 Open Browser and navigate
    // await 2 Enter usename
    // await 3 Enter password
    // await 4 Click submit
    // await 5 Validation
    // async await 

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').type('secret_sauce', {delay: 50});
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('Products');
})

test('Test', async ({}) => {
    const browser = await webkit.launch();
    const context = await browser.newContext({viewport: {width: 1500, height: 900}}); // Btowser context with capabilities
    const page = await context.newPage(); // New fresh page of browser

    await page.goto('https://www.saucedemo.com/');

    await page.waitForTimeout(2000);

    /**
     * Chrome - plugins + cookies
     * We can create directly the page with page fixture if we need
     * some default page
    */
})
