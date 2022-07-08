const { test, expect } = require('@playwright/test');

test('Validate Products title', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').type('secret_sauce', {delay: 50});
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('PRODUCTS', {ignoreCase: true});

})