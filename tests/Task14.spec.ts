import { test } from '@playwright/test';

test('Lenskart Store Locator', async ({ page }) => {

  await page.goto('https://www.lenskart.com/');

  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  await page.locator('a:has-text("STORES")').hover();
  await page.locator('a:has-text("STORES")').click();

  await page.locator('//img[contains(@src,"bengalore-210126.png")]').click();

  await page.screenshot({ path: './screenshots/lenskart.png' });

});