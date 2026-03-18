export class Homepage {
  constructor(page) {
    this.page = page;
    this.search = page.getByPlaceholder('Search Amazon.in');
    this.searchBtn = page.getByRole('button', { name: 'Go' });
  }

  async gotourl(url) {
    await this.page.goto(url);
  }

  async searchbar(search) {
    await this.search.fill(search);
  }

  async clickSearchBtn() {
    await this.searchBtn.click();
  }
}