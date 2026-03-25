import {test,expect} from '@playwright/test';
import login from '../Pages/task1login.page';
import bankManager from '../Pages/task1bankmanager.page';
import addCustomer from '../Pages/task1addcustomer.page';
import openAcc from '../Pages/task1openacc.page';
import clogin from '../Pages/task1clogin.page';
import Cacc from '../Pages/task1cacc.page';
import deposit from '../Pages/task1deposit.page';
import widthdrawl from '../Pages/task1withdraw.page';

import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'tests/Task31/TestData/data.json')); 
let data = JSON.parse(datafile);

test('task-1 Bank',async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let lname = data.lname;
    let Pcode = data.Pcode;
    let currency = data.currency;
    let depositMoney = data.depositMoney;
    let widthdrawlMoney = data.widthdrawMoney;
    let balanceMoney = depositMoney - widthdrawlMoney;

    let loginPage = new login(page);
    let bankManagerPage = new bankManager(page);
    let addCustomerPage = new addCustomer(page);
    let openAccPage = new openAcc(page);
    let cloginPage = new clogin(page);
    let CaccPage = new Cacc(page);
    let depositPage = new deposit(page);
    let widthdrawlPage = new widthdrawl(page);


    await page.goto(url);
    await loginPage.bmLoginBtn.click();
    await bankManagerPage.addCustomerBtn.click();
    await addCustomerPage.fname.fill(fname);
    await addCustomerPage.lname.fill(lname);
    await addCustomerPage.pCode.fill(Pcode);
    await addCustomerPage.addCBtn.click();

    await bankManagerPage.openAccBtn.click();
    await openAccPage.cName.selectOption({label:`${fname} ${lname}`});
    await expect(openAccPage.cName).toContainText(`${fname} ${lname}`)
    await openAccPage.currency.selectOption(currency);
    await expect(openAccPage.currency).toContainText(currency);
    await openAccPage.processBtn.click();

    await loginPage.homeBtn.click();
    await loginPage.cLoginBtn.click();

    await cloginPage.cname.selectOption(`${fname} ${lname}`);
    await cloginPage.loginBtn.click();

    await CaccPage.deposit.click();
    await depositPage.ammount.fill(depositMoney);
    await depositPage.depositBtn.click();
    await expect(depositPage.msgtxt).toContainText('Deposit Successful');


    await CaccPage.widthdrawl.click();
    await page.waitForTimeout(5000);
    await widthdrawlPage.ammount.type(widthdrawlMoney);
    await widthdrawlPage.widthdrawBtn.click();
    await expect(widthdrawlPage.msg).toBeVisible();
    

    await expect(CaccPage.balance).toHaveText(`${balanceMoney}`);

    await CaccPage.logout.click();

    await page.screenshot({path:`Screenshots/task1${browserName}.png`});

})