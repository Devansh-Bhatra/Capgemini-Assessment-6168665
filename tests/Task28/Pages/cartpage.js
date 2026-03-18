export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async takeScreenshot() {
    await this.page.screenshot({ path: 'cart.png' });
  }
}