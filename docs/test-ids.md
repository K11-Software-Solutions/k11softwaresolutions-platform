# Test Automation Element IDs

This document lists UI elements and their `id` attributes for test automation. Only elements that have `id` attributes in source files are listed. Pages without `id` attributes are noted.

## Frontend

### Home page
File: [frontend/app/page.js](frontend/app/page.js)
- `home-hero-section` — Hero section wrapper
- `home-hero-bg` — Hero background
- `home-hero-content` — Hero content container
- `home-hero-grid` — Hero layout grid
- `home-hero-left` — Left column of hero
- `home-hero-announcement` — Small announcement pill in hero
- `home-hero-title` — Main hero H1
- `home-hero-description` — Hero description paragraph
- `home-hero-actions` — Container for primary action buttons
- `home-explore-services-btn` — "Explore services" button
- `home-contact-btn` — "Talk to us" button
- `home-hero-benefits` — Benefits container
- `home-benefit-fast` — Benefit: Fast delivery
- `home-benefit-scalable` — Benefit: Scalable architecture
- `home-benefit-ai` — Benefit: AI-ready solutions
- `home-hero-image-container` — Hero image wrapper (right column)
- `home-hero-image` — Hero `<img>` element
- `home-quick-actions-section` — "Get started" section wrapper
- `home-quick-actions-container` — Container for quick actions
- `home-quick-actions-header` — Header row for quick actions
- `home-quick-actions-header-content` — Header content wrapper
- `home-quick-actions-title` — "Get started" title
- `home-quick-actions-desc` — "Jump into the areas you use most." description
- `home-quick-actions-grid` — Grid container for quick action cards
- `home-dashboard-link` — Link to Dashboard card
- `home-dashboard-card` — Dashboard card
- `home-dashboard-card-body` — Dashboard card body
- `home-dashboard-icon` — Dashboard card icon
- `home-dashboard-content` — Dashboard card content wrapper
- `home-dashboard-title-row` — Dashboard title row
- `home-dashboard-title` — Dashboard card title
- `home-dashboard-arrow` — Dashboard arrow affordance
- `home-dashboard-desc` — Dashboard card description
- `home-services-link` — Link to Services card
- `home-services-card` — Services card
- `home-services-card-body` — Services card body
- `home-services-icon` — Services card icon
- `home-services-content` — Services card content wrapper
- `home-services-title-row` — Services title row
- `home-services-title` — Services card title
- `home-services-arrow` — Services arrow affordance
- `home-services-desc` — Services card description

### Login page
File: [frontend/app/login/page.js](frontend/app/login/page.js)
- `login-container` — Login page container
- `login-title` — Login page H2
- `login-error` — Error message paragraph (shown when login fails)
- `login-form` — Login form element
- `login-username` — Username input field
- `login-password` — Password input field
- `login-forgot-password-link` — Container for "Forgot your password?" link
- `login-forgot-link` — The "Forgot your password?" anchor
- `login-submit` — Login submit button
- `login-register-link` — Paragraph wrapper for register link
- `login-register-here` — "Register here" anchor

### Pages updated with `id` attributes
File: [frontend/app/forgot-password/page.js](frontend/app/forgot-password/page.js)
- `forgot-password-container` — Page wrapper
- `forgot-password-form` — Form element
- `forgot-password-email` — Email input
- `forgot-password-submit` — Submit button
- `forgot-password-message` — Success message
- `forgot-password-error` — Error message

File: [frontend/app/reset-password/page.js](frontend/app/reset-password/page.js)
- `reset-password-container` — Page wrapper
- `reset-password-title` — Page title
- `reset-password-message` — Success message
- `reset-password-error` — Error message
- `reset-password-form` — Form element
- `reset-password-password` — New password input
- `reset-password-confirm` — Confirm password input
- `reset-password-submit` — Submit button

File: [frontend/app/register/page.js](frontend/app/register/page.js)
- `register-container` — Page wrapper
- `register-title` — Page title
- `register-error` — Error message
- `register-success` — Success message
- `register-form` — Form element
- `register-username` — Username input
- `register-email` — Email input
- `register-password` — Password input
- `register-subscription` — Subscription select
- `register-submit` — Submit button

File: [frontend/app/contact/page.js](frontend/app/contact/page.js)
- `contact-container` — Page wrapper
- `contact-title` — Page title
- `contact-form` — Form element
- `contact-name` — Name input
- `contact-email` — Email input
- `contact-message` — Message textarea
- `contact-submit` — Submit button
- `contact-sent` — Sent confirmation message

File: [frontend/app/services/page.js](frontend/app/services/page.js)
- `services-container` — Page wrapper
- `services-title` — Page title

File: [frontend/app/about/page.js](frontend/app/about/page.js)
- `about-container` — Page wrapper
- `about-title` — Page title

File: [frontend/app/insights/page.js](frontend/app/insights/page.js)
- `insights-container` — Page wrapper

File: [frontend/app/dashboard/page.js](frontend/app/dashboard/page.js)
- `dashboard-container` — Page wrapper
- `dashboard-title` — Page title
- `dashboard-welcome` — Welcome text element
- `dashboard-email` — Email display element
- `dashboard-logout` — Logout button

### Components
- `frontend/components` — No `id` attributes detected in source files under `components/`.

---

Notes:
- This document was generated automatically by scanning source files for `id="..."` occurrences under `frontend/`.
- If you want `id` attributes added to other pages or specific components, I can add them following your naming convention.

---
Generated by automation on 2025-12-23
