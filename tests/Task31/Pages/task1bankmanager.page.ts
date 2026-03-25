
class bankManager{
    addCustomerBtn :any;
    openAccBtn:any;
    customerBtn:any;

    constructor(page){
        this.addCustomerBtn = page.getByRole('button',{name:'Add Customer'}).first();
        this.openAccBtn = page.getByRole('button',{name:'Open Account '});
        this.customerBtn = page.getByRole('button',{name:'Customers '});
    }
}

export default bankManager;
