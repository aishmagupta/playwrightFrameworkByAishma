import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for Saucedemo login page (https://www.saucedemo.com/)
 */
export class LoginPage extends BasePage {
  readonly usernameInput: Locator = this.page.locator('#user-name');
  readonly passwordInput: Locator = this.page.locator('#password');
  readonly loginButton: Locator = this.page.locator('#login-button');

  async gotoLogin(): Promise<void> {
    await this.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async closeBrowser(): Promise<void> {
    await this.page.close();
  }
}
