// import {test} from "@playwright/test"
// import excel from "exceljs"
// import path from "path"

// test("handling test data", async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet1")
//     let data= sheet?.getRow(1).getCell(1).value

//     console.log(data);
    
// })



// test("handling test data with multiple data", async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet2")

//     for(let i=1;i<=sheet?.actualRowCount;i++){
//         for (let j=1;j<=sheet?.actualColumnCount;j++){

//             let data= sheet?.getRow(i).getCell(j).toString()

//             console.log(data);

//         }
//     }
    
// })


import { test } from "@playwright/test"
import Excel from "exceljs"
import path from "path"

test("handling test data with excel", async ({ page }) => {

    let book = new Excel.Workbook()

    await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))

    let sheet = book.getWorksheet("Sheet3")

    for (let i = 2; i <= sheet!.actualRowCount; i++) {   

        let url = sheet!.getRow(i).getCell(1).toString()
        let name = sheet!.getRow(i).getCell(2).toString()
        let email = sheet!.getRow(i).getCell(3).toString()
        let password = sheet!.getRow(i).getCell(4).toString()

        console.log(url, name, email, password)

        await page.goto(url)

        await page.getByLabel("Name").fill(name)
        await page.getByLabel("Email Id").fill(email)
        await page.getByLabel("Password").fill(password)

    }

})