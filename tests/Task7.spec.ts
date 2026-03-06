import { test} from '@playwright/test';

test('ICC Cricket Rankings - Virat Kohli Rating', async ({ page }) => {

  await page.goto('https://www.icc-cricket.com/rankings/mens/player-rankings/odi/batting');

  const rating = page.locator('//span[text()="Virat Kohli"]/ancestor::tr//span[contains(@class,"font-extrabold")]');

  const ratingValue = await rating.textContent();

  console.log('Virat Kohli Rating:', ratingValue);

});