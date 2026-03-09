import { test, expect } from '@playwright/test';

test('Qspiders Login Scenario', async ({ page }) => {

  test.setTimeout(20000);

  await page.goto('https://demoapps.qspiders.com/ui/login?scenario=1');

  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  await page.getByPlaceholder('Enter your email').fill('admin@gmail.com');

  await page.getByPlaceholder('Enter your password').fill('admin@123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByPlaceholder('Enter your email')).toBeVisible();

  await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
  await page.screenshot({ path: './screenshots/QspidersLogin.png' });

});