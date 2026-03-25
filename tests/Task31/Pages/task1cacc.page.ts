class Cacc{
    trasnscationBtn:any;
    deposit:any;
    widthdrawl:any;
    balance:any;
    logout:any;

    constructor(page){
        this.trasnscationBtn = page.locator('//button[@ng-class="btnClass1"]');
        this.deposit = page.locator('//button[@ng-class="btnClass2"]');
        this.widthdrawl = page.locator('//button[@ng-class="btnClass3"]');
        this.balance = page.locator('//strong[@class="ng-binding"]').nth(1);
        this.logout = page.getByRole('button',{name:'Logout'});
    }
}

export default Cacc;