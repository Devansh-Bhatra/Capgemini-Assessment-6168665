import { test } from '@playwright/test'
import data from '../testdata/flipkartData.json'
import { HomePage } from '../pages/HomePage'
import { GudiPadwaPage } from '../pages/GudiPadwaPage'
import { CartPage } from '../pages/CartPage'

test('Flipkart End to End Scenario', async ({page}) => {

const home = new HomePage(page)
const gudi = new GudiPadwaPage(page)

await home.launchURL(data.url)

await home.clickHome()

await home.openGudiPadwaStore()

await gudi.clickGudiCloth()

// Add 5th product
const product1Page = await gudi.selectProduct(data.product1)
await gudi.addProduct(product1Page)

// Add 8th product
const product2Page = await gudi.selectProduct(data.product2)
await gudi.addProduct(product2Page)

// Go to Cart
await page.goto("https://www.flipkart.com/viewcart")

const cart = new CartPage(page)

await cart.increaseQuantity()

await cart.placeOrder()

// Screenshot
await page.screenshot({path:'screenshots/order.png'})

})