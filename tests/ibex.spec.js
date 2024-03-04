import test from "@playwright/test";

test('Login with standard_user', async({page}) => {
    await page.goto('https://sqa-350.ibex-ai.com/')
    await page.waitForTimeout(5000);
});