export class Searchpage{
  constructor(page){
    this.page=page
    this.searchproduct=page.locator('//div[@data-component-type="s-search-result"]');
  }

  async applybrand(brand){
    await this.page.locator('text=Brands');
    await this.page.locator('text='+brand).click();
  }
  async applyrating(rating){
    await this.page.locator('text=Rating');
    await this.page.locator('text='+rating).click();
  }
  async ratefilter(){
    await this.page.locator('//*[@id="a-autoid-31"]/span/i').click();
    await this.page.locator('//*[@id="s-result-sort-select_2"]').click();
  }
  async selectproduct(index){
    const product=this.searchproduct.nth(index)
    const [newpage]=await Promise.all([
      this.page.context().waitForEvent('page'),
      product.click()
    ]);
    await newpage.waitForLoadState();
    return newpage;

  }

}