import { test, expect } from '@playwright/test';
import { UploadPage } from '../pages/UploadPage';
import fileData from '../data/fileData.json';
import path from 'path';

test.describe('E2E File Upload Validation', () => {

  test('Upload file and validate uploaded file name', async ({ page }) => {
    const uploadPage = new UploadPage(page);

    // Step 1: Navigate to upload page
    await uploadPage.goto();

    // Step 2 & 3: Read file path from JSON and upload
    const resolvedPath = path.resolve(fileData.filePath);
    await uploadPage.uploadFile(resolvedPath);

    // Step 4: Click Upload button
    await uploadPage.clickUpload();

    // Step 5 & 6: Wait and capture uploaded file name
    const displayedFileName = await uploadPage.getUploadedFileName();

    // Step 7: Verify it matches expected name from JSON
    expect(displayedFileName).toBe(fileData.expectedFileName);
  });

});