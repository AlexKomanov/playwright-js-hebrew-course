import { test, expect } from '@playwright/test';

test.describe("UI Mode Describe", () => {
    test.beforeEach(async ({page}) => {
        await page.setViewportSize({width: 1400, height: 1000});
    })
    
    test('test ui mode passed', async ({ page }) => {
    
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    
      // create a locator
      const getStarted = page.getByRole('link', { name: 'Get started' })
    
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

    test('test ui mode failed', async ({ page }) => {
    
      await page.goto('https://playwright.dev/');

      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    
      // create a locator
      const getStarted = page.getByRole('link', { name: 'Get started' })
    
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

      // Validate getByRole('heading', { name: 'Installation' }) exists
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test.skip('test ui mode skipped', async ({ page }) => {
    
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    
      // create a locator
      const getStarted = page.getByRole('link', { name: 'Get started' })
    
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

    test.skip('test ui mode skipped -2', async ({ page }) => {
    
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    
      // create a locator
      const getStarted = page.getByRole('link', { name: 'Get started' })
    
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