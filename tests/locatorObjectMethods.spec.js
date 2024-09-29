import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check Method checks the radio buttons and checkboxes if they havent been checked yet", async ({
    page,
  }) => {
    let checkBox = page.getByText("Checkboxes");
    await checkBox.click();
    let checkBox1 = page.locator("#box1"); // CSS
    await checkBox1.check();
  });
  test("Check Method checks the radio buttons and checkboxes if they havent been UN_checked yet", async ({
    page,
  }) => {
    let checkBox = page.getByText("Checkboxes");
    await checkBox.click();
    let checkBox2 = page.locator("#box2"); // CSS
    await checkBox2.uncheck();
  
  });

  test("selectOptions() used for dropdowns", async ({ page }) => {
    page.locator("text='Dropdown'").click();
    let simpleDropdown = page.locator("//select[@id='dropdown']");
    await simpleDropdown.selectOption({ label: "Option 1" }); // Selects by Value
    // await simpleDropdown.selectOption({index: "Option 1"});
  });
  test("InputValue(): only works with <input>, <textarea>, <select> ", async ({
    page,
  }) => {
    await page.getByText("Inputs").click();
    let inputBox = page.locator("//input[@type='number']");
    await inputBox.fill("123");
    let inputValue = await inputBox.inputValue();
    console.log(inputValue);
  });
});
