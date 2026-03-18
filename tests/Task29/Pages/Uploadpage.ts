import { Page } from '@playwright/test';

export class UploadPage {
  constructor(private page: Page) {}

  private fileInput = this.page.locator('#file-upload');
  private uploadButton = this.page.locator('#file-submit');
  private uploadedFileName = this.page.locator('#uploaded-files');

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  async clickUpload() {
    await this.uploadButton.click();
  }

  async getUploadedFileName(): Promise<string> {
    await this.uploadedFileName.waitFor({ state: 'visible' });
    return (await this.uploadedFileName.textContent())?.trim() ?? '';
  }
}