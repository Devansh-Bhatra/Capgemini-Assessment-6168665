class login{
    cLoginBtn:any;
    bmLoginBtn:any;
    homeBtn:any;

    constructor(page){
        this.bmLoginBtn = page.getByRole('button',{name:'Bank Manager Login'});
        this.cLoginBtn = page.getByRole('button',{name:'Customer Login'});
        this.homeBtn = page.getByRole('button',{name:'Home'});
    }
}

export default login;