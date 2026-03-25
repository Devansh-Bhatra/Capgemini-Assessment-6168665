class openAcc{
    cName:any;
    currency:any;
    processBtn:any;

    constructor(page){
        this.cName = page.locator('//select[@id="userSelect"]');
        this.currency = page.locator('//select[@id="currency"]');
        this.processBtn = page.getByRole('button',{name:'Process'});
    }
}

export default openAcc;