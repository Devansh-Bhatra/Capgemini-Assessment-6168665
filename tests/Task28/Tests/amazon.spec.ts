import {test} from '@playwright/test'
import { Homepage } from '../Pages/homepage'
import { CartPage } from '../Pages/cartpage'
import { Productpage } from '../Pages/productpage'
import { Searchpage } from '../Pages/searchpage'
import fs from 'fs';

const data=JSON.parse(fs.readFileSync('C:/Users/devan/OneDrive/Desktop/Task/tests/testdata/amazonData.json','utf-8'));

test('Amazon Test',async({page})=>{
    const home = new HomePage(page);
  const search = new SearchPage(page);

  await home.goTo('https://www.amazon.in');
  await home.searchProduct(data.search);

  await search.applyBrand(data.brand);
  await search.applyRating();
  await search.sortHighToLow();

  const newPage = await search.selectProduct(data.productIndex);

  const product = new ProductPage(newPage);
  await product.getProductDetails();
  await product.addItemToCart();
  await product.openCart();

  const cart = new CartPage(newPage);
  await cart.takeScreenshot();
})