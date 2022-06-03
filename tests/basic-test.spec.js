const {test, expect} = require('@playwright/test');

test("Basic Test", async({page}) => {
    await page.goto("https://playwright.dev/");
    const h1Element = page.locator('[class="hero__title heroTitle_ohkl"]');
    await expect(h1Element).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    await page.waitForTimeout(3000);
});


