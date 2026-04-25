# Playwright Framework (POM + Fixtures)

Playwright test framework with **Page Object Model**, **custom fixtures**, and a **base page class** sharing page scope.

## Structure

- **`src/pages/BasePage.ts`** – Base page class; all page objects extend it and share the same `Page` instance.
- **`src/pages/LoginPage.ts`** – Saucedemo login page.
- **`src/pages/ProductsPage.ts`** – Saucedemo products/inventory page.
- **`src/fixtures.ts`** – Custom fixtures that inject `loginPage` and `productsPage` (same page scope).
- **`tests/`** – Spec files using the fixtures.

## Commands

```bash
npm install
npx playwright install
npm test
```

## Run tests

- `npm test` – Run tests headless
- `npm run test:headed` – Run with browser visible
- `npm run test:ui` – Run with Playwright UI

## Target

Tests run against **https://www.saucedemo.com/** (Swag Labs).
# playwrightFrameworkByAishma
