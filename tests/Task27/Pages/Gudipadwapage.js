export class Gudipadwapage{
  constructor(page){
    this.page=page;
    this.gudicloth=page.getByText('Gudi cloth')
    this.addtocart=page.getByText('Add to cart')
    this.product=page.locator('(//div[@class="RGLWAk"])')
  }

  async clickGudicloth(){
    await this.gudicloth.click();
  }

async selectindex(index){
  const poduct=this.product.nth(index);
  const [newpage]=await Promise.all([
    this.page.context().waitForEvent('page'),
    this.product.click()
  ]);
  await newpage.waitForLoadState();
  return newpage;
}

async addProduct(page){

    await page.getByText('Add to cart').click()

}
}







//   // Click 5th product
//   const [page1] = await Promise.all([
//     context.waitForEvent('page'),
//     products.nth(4).click()   // index starts from 0
//   ]);

//   await page1.waitForLoadState();
//   await page1.locator("//button[contains(text(),'Add to cart')]").click();

//   await page1.close();

//   // Click 8th product
//   const [page2] = await Promise.all([
//     context.waitForEvent('page'),
//     products.nth(7).click()
//   ]);

//   await page2.waitForLoadState();
//   await page2.locator("//button[contains(text(),'Add to cart')]").click();

// });