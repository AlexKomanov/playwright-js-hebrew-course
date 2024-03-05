import test from "@playwright/test";

test.describe.only("IBEX", () => {
    test('ibex', async ({ page }) => {
        await page.goto('https://alex-auto-snup-env.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });

    test('ibex2', async ({ page }) => {
        await page.goto('https://alex-auto-snup-env.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });

    test('ibex3', async ({ page }) => {
        await page.goto('https://alex-auto-snup-env.ibex-ai.com/')
        await page.waitForTimeout(5000);
    });
})



