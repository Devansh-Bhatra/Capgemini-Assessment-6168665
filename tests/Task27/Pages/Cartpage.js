export class Cartpage{
  constructor(page){
    this.page=page;
     this.increaseQty = page.locator('button:has-text("+")')
    this.placeOrder = page.getByText('Place Order')
  }
  async increaseQuantity(){

    const count = await this.increaseQty.count()

    for(let i=0;i<count;i++){

        await this.increaseQty.nth(i).click()

    }

}

async placeOrder(){

    await this.placeOrder.click()

}

}
}