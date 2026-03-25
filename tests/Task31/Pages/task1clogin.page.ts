
class clogin{
    cname:any;
    loginBtn:any;
    constructor(page){
        this.cname = page.locator('//select[@id="userSelect"]');
        this.loginBtn = page.getByRole('button',{name:'Login'});
    }
}

export default clogin;
