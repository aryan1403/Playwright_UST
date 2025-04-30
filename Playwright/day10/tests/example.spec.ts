import { test, expect } from '@playwright/test';


test('check logo', async ({page}) => {
  await page.goto('./hello') //localhost:3000/hello
});
