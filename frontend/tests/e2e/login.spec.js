const { test, expect } = require('@playwright/test');

test.describe('Login page', () => {
  test('login form fields and links', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('#login-username')).toBeVisible();
    await expect(page.locator('#login-password')).toBeVisible();
    await expect(page.locator('#login-submit')).toBeVisible();
    await expect(page.locator('#login-forgot-link')).toBeVisible();
    await expect(page.locator('#login-register-here')).toBeVisible();
  });
});
