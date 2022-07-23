import { test, expect } from '@playwright/test';


test('Login with standard_user', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('Products');

    await page.waitForTimeout(2000);
});