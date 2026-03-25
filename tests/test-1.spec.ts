import { test, expect } from '@playwright/test';


const elements = [
{
//locator: (page) =>  page.getByRole('link', { name: 'Get started' }).click()
},

]
test.describe('test', () => {
test.beforeEach(async ({ page }) => {
await page.goto('https://playwright.dev/');
});

test('test', async ({ page }) => {    
await page.getByRole('link', { name: 'Get started' }).click();
await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
await page.goto('https://playwright.dev/');
});
});
