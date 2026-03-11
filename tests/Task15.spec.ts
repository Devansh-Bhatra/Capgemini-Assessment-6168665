import {test,expect} from "@playwright/test";
test('compare the actual and expected values',async({page})=>{
  await page.goto('https://www.automationtesting.co.uk/dropdown.html');
   const expectedOptions = [
    "Audi",
    "BMW",
    "Ford",
    "Honda",
    "Jeep",
    "Mercedes",
    "Suzuki",
    "Volkswagen"
  ];
   let cars=await page.locator('#cars option').allTextContents();
   console.log("Actual Options:", cars);
    console.log("Expected Options:", expectedOptions);
     expect(cars.length).toBe(expectedOptions.length);
     expect(cars).toEqual(expectedOptions);
     await page.screenshot({path:"./screenshots/compare.png"})
})