import test from "@playwright/test";

test.describe.only("IBEX", () => {
    test('ibex', async ({ page }) => {
        await page.goto('https://sqa-350.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });

    test('ibex2', async ({ page }) => {
        await page.goto('https://sqa-350.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });

    test('ibex3', async ({ page }) => {
        await page.goto('https://sqa-350.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });
})



