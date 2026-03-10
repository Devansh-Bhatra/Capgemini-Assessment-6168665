import { test, expect } from '@playwright/test';

test('Flipkart shoes search and women validation', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('shoes');
  await page.keyboard.press('Enter').waitForTimeout(3000);
  await expect(page.getByText('Women', { exact: true })).toBeVisible();

});