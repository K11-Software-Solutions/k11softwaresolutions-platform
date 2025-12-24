const { test, expect } = require('@playwright/test');

test.describe('Home page', () => {
  test('hero and quick actions visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#home-hero-title')).toBeVisible();
    await expect(page.locator('#home-explore-services-btn')).toBeVisible();
    await expect(page.locator('#home-contact-btn')).toBeVisible();
    await expect(page.locator('#home-hero-image')).toBeVisible();
  });
});
