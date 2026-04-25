import { Page } from '@playwright/test';

/**
 * Base page class sharing page scope to all page classes.
 * All page-specific classes extend this and use the same Playwright Page instance.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  /** Navigate to a path (relative to baseURL) or full URL */
  async goto(pathOrUrl: string): Promise<void> {
    if (pathOrUrl.startsWith('http')) {
      await this.page.goto(pathOrUrl);
    } else {
      await this.page.goto(pathOrUrl);
    }
  }

  /** Get the current page title */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /** Get the underlying page instance (shared scope) */
  getPage(): Page {
    return this.page;
  }

  async closeBrowser(): Promise<void> {
    console.log('Closing browser');
    await this.page.close();
    console.log('Browser closed');
  }
}
