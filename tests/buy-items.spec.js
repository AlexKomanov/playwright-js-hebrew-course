const { test, expect } = require('@playwright/test');

test.only('Validate icon counter', async ({ page }) => {
    
    // Part 1 - Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user', { delay: 50 });
    await page.locator('#password').type('secret_sauce', {delay: 50});
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('Products');
  
    // Part 2 - Adding items
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
    await page.locator('[class="shopping_cart_link"]').click();

    // Part 3 - Click checkout on Your Cart Page
    await expect(page.locator('.title')).toContainText('Your Cart');
    await page.locator('[class="btn btn_action btn_medium checkout_button"]').click();
    
    // Part 4 - Fill details on Checkout: Your Information Page
    await expect(page.locator('.title')).toContainText('Checkout: Your Information');
    await page.locator('#first-name').type('Alex');
    await page.locator('#last-name').type('Komanov');
    await page.locator('#postal-code').type('20100');
    await page.locator('#continue').click();
    
    // Part 5 - Click on finish button Checkout: Overview Page
    await expect(page.locator('.title')).toContainText('Checkout: Overview');
    await page.locator('#finish').click();

    // Part 6 - Checkout complete  Checkout: Complete!
    await expect(page.locator('.title')).toContainText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toContainText('THANK YOU FOR YOUR ORDER');



})