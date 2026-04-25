import { test, expect } from '../src/fixtures';

test.describe('Saucedemo', () => {
  test('should have correct page title on homepage', async ({ loginPage }) => {
    await loginPage.gotoLogin();
    const title = await loginPage.getTitle();
    expect(title).toBe('Swag Labs');
    console.log('Title: ', title);
    await loginPage.closeBrowser();
  });
});
