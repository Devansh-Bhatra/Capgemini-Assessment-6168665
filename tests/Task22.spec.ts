import { test ,expect } from "@playwright/test";
import path from "path";

test('File upload test', async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/upload");

  const filePath = path.join(__dirname, "../Files/main.py");

  await page.locator('#file-upload').setInputFiles(filePath);

  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();

});