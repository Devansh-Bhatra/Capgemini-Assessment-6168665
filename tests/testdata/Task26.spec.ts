import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

//const filePath = path.join(__dirname, 'tests/testdata/bookUser.json');

const data = JSON.parse(
  fs.readFileSync('C:/Users/devan/OneDrive/Desktop/Task/tests/testdata/bookUser.json', 'utf-8')
);

test('End-to-End Login → Add Book to Collection → Logout', async ({ page }) => {

  const user = data.user;
  const bookName = data.book;

  await page.goto('https://demoqa.com/books');

  await page.click('#login');

  await page.click('text=New User');

  await page.fill('#firstname', user.firstName);
  await page.fill('#lastname', user.lastName);
  await page.fill('#userName', user.username);
  await page.fill('#password', user.password);

  console.log("Solve captcha manually and click Register");

  await page.pause();

  await page.goto('https://demoqa.com/login');

  await page.fill('#userName', user.username);
  await page.fill('#password', user.password);
  await page.click('#login');

  await expect(page).toHaveURL(/profile/);

  await page.click('text=Book Store');

  await page.fill('#searchBox', bookName);

  const book = page.locator('a', { hasText: bookName });
  await book.click();

  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Add To Your Collection' }).click();

  await page.click('text=Profile');

  const collectionBook = page.locator('a', { hasText: bookName });
  await expect(collectionBook).toBeVisible();

  await page.click('#submit');

  await expect(page).toHaveURL(/login/);

});