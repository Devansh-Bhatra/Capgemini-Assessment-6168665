import { test, expect } from '@playwright/test';
test("justdial notification handling", async ({ browser }) => {

    const context = await browser.newContext({
        permissions: ["notifications"]
    });

    const page = await context.newPage();

    await page.goto("https://www.justdial.com");

    await page.waitForLoadState("load");

    await page.locator('input[placeholder*="Search"]').fill("Restaurants");

    // await page.waitForLoadState("load")

    await page.keyboard.press("Enter");

    await page.waitForTimeout(10000)

});