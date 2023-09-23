import { test, expect } from '@playwright/test';

test.describe("Merge Reports", () => {
    for (let i = 0; i < 20; ++i) {
        const url = `https://playwright.dev/?${i + 1}`;

        test(`Verify a response from ${url}`, async ({ page }) => {
            console.log(`Test ${i + 1} starting `)
            let response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
            response = await page.goto(url);
            expect.soft(response.status()).not.toBe(200);
            console.log(`Test ${i + 1} finished `)
        })
    }
})

