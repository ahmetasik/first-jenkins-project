import { test }  from "@playwright/test";

test.describe("Test Group 1", () => {

    test.beforeAll(() => {
        console.log('Before All Executed');

    });

    test.afterAll(() => {
        console.log('After All Executed');

    });

    test.beforeEach(() => {
        console.log('Before Each Executed');

    });

    test.afterEach(() => {
        console.log('After Each Executed');

    });

    test("Test Case 1", async ({page}) => {
        console.log('Test Case 1 Executed');
    });
    test("Test Case 2", async ({page}) => {
        console.log('Test Case 2 Executed');
    });
    test("Test Case 3", async ({page}) => {
        console.log('Test Case 3 Executed');
    });
})