export class Homepage{
  constructor(page){
    this.page=page;
    this.homelink=page.locator('a:has-text("Home")');
    this.gudi-padwa=page.getByText('Gudi Padwa Store')
  }
  async clickHomelink(){
    await this.homelink.click();
  }
  async clickGudipadwa(){
    await this.gudi-padwa.click();
  }

  async openflipkart(){
    await this.page.goto('https://www.flipkart.com/');
  }
  
}