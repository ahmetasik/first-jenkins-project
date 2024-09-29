import { expect, test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
await page.goto("https://practice.cydeo.com/");
let actualTitle = await page.title();
expect(actualTitle).toBe("Practice");
});


test('Getting the Current URL of the page', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  let currentUrl = page.url();
  console.log(currentUrl);
});


test('Set the window size', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    
    await page.setViewportSize({width:1980, height:1000});
    
});