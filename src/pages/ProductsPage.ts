import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for Saucedemo products/inventory page (after login)
 */
export class ProductsPage extends BasePage {
  readonly pageTitle: Locator = this.page.getByText('Products');
  readonly cartBadge: Locator = this.page.locator('.shopping_cart_badge');

  async gotoProducts(): Promise<void> {
    await this.goto('/inventory.html');
  }

  async getProductsHeadingText(): Promise<string> {
    return this.pageTitle.textContent() ?? '';
  }
}
