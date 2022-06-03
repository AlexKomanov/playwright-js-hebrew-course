const { test, expect } = require('@playwright/test');

test.only('Validate icon counter', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').type('secret_sauce', {delay: 50});
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('Products');

    await page.pause();
    await page.locator('[class="inventory_item_description"]', {hasText: 'Sauce Labs Backpack'})
    .locator('button')
    .click();

    const cartIcon = page.locator('[class="shopping_cart_badge"]');
    await expect(cartIcon).toHaveText('1');


    await page.locator('[class="inventory_item_description"]', {has: page.locator('text="Sauce Labs Onesie"')})
    .locator('button')
    .click();
    await cartIcon.scrollIntoViewIfNeeded();
    await expect(cartIcon).toHaveText('2');

})