import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

    
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').pressSequentially('standard_user', { delay: 50 });
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();

    //After Login
    await expect(page.locator('.title')).toContainText('Products');

    // await page.waitForTimeout(3000);
})