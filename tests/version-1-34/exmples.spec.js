import { test, expect } from '@playwright/test';
test.describe("Error Handling Describe", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 1000 });
  })
  
  test('Test Example', async ({ page }) => {
    await test.step('Navigate to the application', async () => {
      await page.goto('https://www.saucedemo.com/'); 
      const timeOutExpect = expect.configure({timeout: 20000});
      await timeOutExpect(page).toHaveURL('https://www.saucedemo.com/')
      await timeOutExpect(page.locator('.login_wrapper-inner')).toBeVisible();
    });
    await test.step('Enter credentials', async () => {
      await page.locator('[data-test="username"]').type('standard_user', {delay: 10});
      await page.locator('[data-test="password"]').type('secret_sauce', {delay: 10});
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('Validate successfull login', async () => {
        await expect(page.locator('.title')).toContainText("Products");
    });

    //[class="btn btn_primary btn_small btn_inventory"][name="add-to-cart-sauce-labs-backpack"]
    await test.step('Add items to basket', async () => {
        await page.locator('[class="btn btn_primary btn_small btn_inventory"]')
        .and(page.locator('[name="add-to-cart-sauce-labs-backpack"]'))
        .click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
      });

      await test.step('Validate Number of added items', async () => {
        const numberOfItems = await page.locator('#shopping_cart_container a').textContent();
        // expect(numberOfItems).toBe(3); 
        expect(Number.parseInt(numberOfItems)).toBe(3);
        expect(numberOfItems).toBe("3");
        await page.locator('#shopping_cart_container a').click();
      });

      await test.step('Perform Checkout', async () => {
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').type('alex');
        await page.locator('[data-test="lastName"]').type('komanov');
        await page.locator('[data-test="postalCode"]').type('20100');
        await page.locator('[data-test="continue"]').click();
      });

      await test.step('Finish Transaction', async () => {
        await page.locator('[data-test="finish"]').click();
        const headingElement = page.getByRole('heading', { name: 'Thank you for your order!' });
        
        await expect(headingElement).toHaveText("Thank you for your order!", {timeout: 10000});
      });


      await test.step('Log out from the application', async () => {
        await page.locator('[data-test="back-to-products"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Reset App State' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/')
        await expect(page).toHaveScreenshot({fullPage: true});

       })
  });
})