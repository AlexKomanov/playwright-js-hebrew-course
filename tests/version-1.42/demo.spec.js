import { test, expect } from '@playwright/test';

/**
 * @link 'https://github.com/microsoft/playwright/issues/23180'
 */

test('Add Locator Handler', {
    tag: ['@regression', '@sanity'],
},async ({ page }) => {
    // Setup the handler.
    await page.addLocatorHandler(
        page.getByRole('heading', { name: 'Hej! You are in control of your cookies.' }),
        async () => {
            await page.getByRole('button', { name: 'Accept all' }).click();
        });
    // Write the test as usual.
    await page.goto('https://www.ikea.com/');
    await page.getByRole('link', { name: 'Collection of blue and white' }).click();
    await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();
})

test('Add Tag Name',{
    tag: ['@regression', '@sanity'],
}, async ({ page }) => {
    // Setup the handler.
    await page.addLocatorHandler(
        page.getByRole('heading', { name: 'Hej! You are in control of your cookies.' }),
        async () => {
            await page.getByRole('button', { name: 'Accept all' }).click();
        });
    // Write the test as usual.
    await page.goto('https://www.ikea.com/');
    await page.getByRole('link', { name: 'Collection of blue and white' }).click();
    await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();
})

/**
 * @link_issue 'https://github.com/microsoft/playwright/issues/23180'
 * @link_documentation 'https://playwright.dev/docs/test-annotations#tag-tests'
 */
test('Add Annotation Tag', {
    tag: ['@regression', '@nightly', '@module', '@quick_fix', '@mandatory'],
    annotation: [
        {type: 'link to bug: ', description: 'https://github.com/microsoft/playwright/issues/23180'},
        {type: 'link to JIRA Story: ', description: 'https://playwright.dev/docs/test-annotations#tag-tests'},
    ],
}, async ({ page }) => {
    // Setup the handler.
    await page.addLocatorHandler(
        page.getByRole('heading', { name: 'Hej! You are in control of your cookies.' }),
        async () => {
            await page.getByRole('button', { name: 'Accept all' }).click();
        });
    // Write the test as usual.
    await page.goto('https://www.ikea.com/');
    await page.getByRole('link', { name: 'Collection of blue and white' }).click();
    await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();
})

