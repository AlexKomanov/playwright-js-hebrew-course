const { test, expect } = require('@playwright/test');

test.describe.parallel('Login Feature', () => {
    
    test.beforeAll(async() => {
        //Executed before all tests
    });

    test.beforeEach(async({page}) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test.afterEach(async({page}, testInfo) => {
        await page.waitForTimeout(500);
        await page.screenshot({path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`, fullPage: true});
    })


    test('Login with standard_user', async({page}) => {
        await page.locator('#user-name').type('standard_user', { delay: 50 });
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('.title')).toContainText('Products');
    });

    test('Login with locked_out_user', async({page}) => {
        await page.locator('#user-name').type('locked_out_user', { delay: 50 });
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('[class="error-message-container error"] h3'))
        .toContainText('Epic sadface: Sorry, this user has been locked out.');
    });

    test('Login with missing password', async({page}) => {
        await page.locator('#user-name').type('standard_user', { delay: 50 });
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('[class="error-message-container error"] h3'))
        .toContainText('Epic sadface: Password is required');
    });
})