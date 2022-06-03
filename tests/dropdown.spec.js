const { test, expect } = require('@playwright/test');

test('Dropdown Test', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').type('secret_sauce', {delay: 50});
    await page.locator('[id="login-button"]').click();

    //After Login
    await expect(page.locator('.title')).toContainText('Products');

    const dropdownElement = page.locator('.product_sort_container');
    await page.waitForTimeout(3000);
    await dropdownElement.selectOption({label: 'Price (high to low)'});
    await page.waitForTimeout(3000);
    await dropdownElement.selectOption({value: 'za'});
    await page.waitForTimeout(3000);
    await dropdownElement.selectOption({index: 2});
    await page.waitForTimeout(3000);
})