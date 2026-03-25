
class addCustomer{
    fname:any;
    lname:any;
    pCode:any;
    addCBtn:any;

    constructor(page){
        this.fname = page.getByPlaceholder('First Name');
        this.lname = page.getByPlaceholder('Last Name');
        this.pCode = page.getByPlaceholder('Post Code');
        this.addCBtn = page.getByRole('button', { name: 'Add Customer'}).nth(1);
    }
}

export default addCustomer;
