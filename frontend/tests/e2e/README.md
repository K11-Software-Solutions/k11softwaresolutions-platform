# Playwright E2E Tests

This document explains how to run the Playwright end-to-end tests locally and in CI.

Prerequisites
- Node 18+ installed
- From the repository root, `cd frontend`

Install dependencies and Playwright browsers

```bash
cd frontend
npm ci
npx playwright install --with-deps
```

Run tests locally

```bash
# Run all tests (headless)
npx playwright test

# Run tests headed (with UI)
npx playwright test --headed

# Run a single project/browser (e.g. chromium)
npx playwright test --project=chromium
```

Viewing reports

- After tests complete, open the HTML report:

```bash
npx playwright show-report frontend/playwright-report
```

CI notes
- The repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml` that:
  - Caches `frontend/node_modules` and Playwright browsers
  - Installs dependencies and browsers
  - Builds and starts the Next.js app (Playwright `webServer`) and waits for port 3000
  - Runs tests across `chromium`, `firefox`, and `webkit`
  - Uploads `frontend/playwright-report` and `frontend/test-results` as artifacts

Environment variables
- If your app requires env vars at build/runtime (e.g. `NEXT_PUBLIC_API_URL`), add them to GitHub Actions secrets and inject into the workflow. The Playwright `webServer` uses `npm run build && npm run start` by default.

Troubleshooting
- If you see version conflicts, ensure `@playwright/test` and `playwright` versions in `frontend/package.json` match.
- Use `npx playwright test --list` to confirm tests are discovered.

Maintainers can update this README with additional commands or CI hints.
