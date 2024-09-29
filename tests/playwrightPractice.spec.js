import { test } from '@playwright/test';

// Test case 1: Empty test case
test('Youtube Search', async ({ page }) => {
  await page.goto("https://www.youtube.com/");
 
  let searchBox = page.locator("//input[@id='search']");
  await searchBox.click();
  

  await searchBox.fill('Cydeo');
  

  await searchBox.press('Enter');
  

  let firstVideo = page.locator("(//a[@id='video-title'])[1]");
  await firstVideo.click();

  





});