import { test } from '@playwright/test';

test.describe('@smoke Test Group', () => {
  test('1', async ({ page }) => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com");
    })
    test.afterEach(async ({page}) => {
    })
  });

  test('Get title', async ({ page }) => {
    console.log(await page.title());
  });

  test('Get URL', async ({ page }) => {
    console.log(page.url);
  });
});