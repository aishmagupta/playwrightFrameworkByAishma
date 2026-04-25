import { test, expect } from '../src/fixtures';
import { TEST_TAGS } from '../src/config/testTags';

test.describe('Saucedemo test suite', () => {

  test.describe.configure({ mode: 'parallel' });

  test(
    `${TEST_TAGS.regression} should have correct page title on homepage`,
    async ({ loginPage }) => {
    await loginPage.gotoLogin();
    const title = await loginPage.getTitle();
    expect(title).toBe('Swag Labs');
    console.log('Title: ', title);
    await loginPage.closeBrowser();
    }
  );

  test(
    `${TEST_TAGS.smoke, TEST_TAGS.regression} should login successfully with valid credentials`,
    async ({ loginPage, productsPage }) => {
      await loginPage.gotoLogin();
      await loginPage.login('standard_user', 'secret_sauce');

      await expect(loginPage.getPage()).toHaveURL(/inventory\.html/);
      await expect(productsPage.pageTitle).toBeVisible();
    }
  );

  test(
    `${TEST_TAGS.regression} should show error for locked out user`,
    async ({ loginPage }) => {
      await loginPage.gotoLogin();
      await loginPage.login('locked_out_user', 'secret_sauce');

      await expect(loginPage.getPage().locator('[data-test="error"]')).toContainText(
        'Sorry, this user has been locked out.'
      );
    }
  );
});
