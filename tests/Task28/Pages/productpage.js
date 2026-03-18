export class Productpage{
  constructor(page){
    this.page=page
    this.title = page.locator('#productTitle');
    this.price = page.locator('.a-price-whole');
    this.addToCart = page.locator('#add-to-cart-button');
    this.goToCart = page.locator('#nav-cart');
  }
    async getProductDetails() {
    const name = await this.title.textContent();
    const price = await this.price.textContent();

    console.log("Product:", name);
    console.log("Price:", price);
  }

  async addItemToCart() {
    await this.addToCart.click();
  }

  async openCart() {
    await this.goToCart.click();
  }
}