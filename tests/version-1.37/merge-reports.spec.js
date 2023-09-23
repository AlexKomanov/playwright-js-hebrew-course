import { test, expect } from '@playwright/test';

test.describe.only("Merge Reports", () => {
    for (let i = 0; i < 20; ++i) {
        const url = `https://playwright.dev/?${i + 1}`;

        test(`Verify a response from ${url}`, async ({ page }) => {
            console.log(`Test ${i + 1} starting `)
            const response = await page.goto(url);
            expect(response.status()).toBe(200);
            console.log(`Test ${i + 1} finished `)
        })
    }
})

