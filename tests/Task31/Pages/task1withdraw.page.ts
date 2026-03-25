class widthdrawl{
    ammount:any;
    widthdrawBtn:any;
    msg:any;

    constructor(page){
        this.ammount = page.getByPlaceholder('amount');
        this.widthdrawBtn = page.getByRole('button',{name:'Withdraw',exact:true});
        this.msg = page.locator('//span[@class="error ng-binding"]');
    }
}

export default widthdrawl;