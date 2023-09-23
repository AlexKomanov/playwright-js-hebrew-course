import { test, expect } from '@playwright/test';
test.describe("Version 1.33 Updates Describe", () => {

    test.beforeEach(async ({ page }) => {
        
        await page.setViewportSize({ width: 1400, height: 1000 });
    })
    test('Filtering Test', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[class="shopping_cart_link"]').click();

        await page.locator('[class="cart_footer"] button').filter({ hasNotText: 'Checkout' }).click();

        await page.locator('[class="shopping_cart_link"]').click();

        await page.locator('[class="cart_footer"] button').filter({ hasNot: page.locator('text="Continue Shopping"') }).click()
    });

    test('Locator Or', async ({ page }) => {
        await page.goto('file:///Users/alexkomanov/Desktop/PlaywrightProjects/playwright-js-hebrew-course/tests/version-1-33/roleOption.html');
        
        await expect(page.locator('#hidden')).toBeAttached();
        await chooseFromDropdown(page, '[class="dropbtn"]', 'Home')
        await expect(page).toHaveURL(/.*#home/)
        await page.goto('file:///Users/alexkomanov/Desktop/PlaywrightProjects/playwright-js-hebrew-course/tests/version-1-33/roleMenuItem.html');
        await chooseFromDropdown(page, '[class="dropbtn"]', 'About')
        await expect(page).toHaveURL(/.*#about/)
    });

    test('Assertions Check', async ({ page }) => {
        await page.goto('https://playwright.dev/');
          
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
      
        // create a locator
        const getStarted = page.getByText('Get Started');
      
        // Expect an attribute "to be strictly equal" to the value.
        await expect(getStarted).toHaveAttribute('href', '/docs/intro');
      
        //page.waitForFunction
        await page.waitForFunction(() => document.querySelectorAll('[class="navbar__logo"]').length == 1, {timeout: 60000});
      
        // locator.toHaveCount()
        await expect(page.locator('[class="navbar__logo"]')).toHaveCount(1);
      
        // Click the get started link.
        await getStarted.click();
      
        // Expects the URL to contain intro.
        await expect(page).toHaveURL(/.*intro/);
    });

  
})


async function chooseFromDropdown(page, dropdownSelector, optionToChose) {
    await page.locator(dropdownSelector).click();
    const option = page.locator('[role="menuItem"]', { hasText: optionToChose });
    const menuItem = page.locator('[role="option"]', { hasText: optionToChose });
    await menuItem.or(option).click();
    
}

