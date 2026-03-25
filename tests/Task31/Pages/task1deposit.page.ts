class deposit{
    ammount:any;
    depositBtn:any;
    msgtxt:any;

    constructor(page){
        this.ammount = page.getByPlaceholder('amount');
        this.depositBtn = page.getByRole('button',{name:'Deposit'}).nth(1);
        this.msgtxt = page.locator('//span[@class="error ng-binding"]');
    }
}

export default deposit;