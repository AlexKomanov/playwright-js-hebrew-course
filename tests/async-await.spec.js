import {test, expect, firefox, chromium, webkit} from '@playwright/test';

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


