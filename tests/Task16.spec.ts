import { test } from '@playwright/test';

test('Saucedemo-ecommerce application', async ({ browser }) => {

  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill("standard_user");
  await page.getByPlaceholder('Password').fill("secret_sauce");

  await page.getByRole('button', { name: 'Login' }).click();

  
  await page.locator('.product_sort_container')
            .selectOption({ label: "Price (low to high)" });

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.screenshot({ path: './screenshots/saucedemo.png' });

});