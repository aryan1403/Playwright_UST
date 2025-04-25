import { test, expect } from '@playwright/test';
import { TodoPage } from './todoPage';

test.beforeEach(async ({ TodoPage }) => {
  //await TodoPage.
})

// built in fixtures --> page, context, browser, browserName, request
test('has title', async ({ page, browserName, TodoPage }) => {
  await page.goto('https://playwright.dev/');

  if(browserName === 'chromium') {

  }

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
