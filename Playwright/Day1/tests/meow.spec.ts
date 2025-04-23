import {expect, test} from "@playwright/test";

test('Page Title', async ({page}) => {
  // test.setTimeout(100);
  await page.goto('https://www.typescriptlang.org/');

  // title should match (title, web_title)
  await expect(page).toHaveTitle("TypeScript: JavaScript With Syntax For Types.");
})