# BuildaScan Site Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand the BuildaCheck website to include BuildaScan Digital Site Intelligence, updated pricing, combined packages, and Citadel parent-brand placement without breaking the existing service site.

**Architecture:** Centralize all new pricing and product content in shared catalog helpers, then build the new pages and homepage/navigation updates against those data structures. Keep fixed-price booking logic separate from quoted enterprise and combined packages so the booking flow stays accurate.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Vitest

### Task 1: Shared content and pricing catalog

**Files:**
- Create: `src/lib/catalog.ts`
- Create: `src/lib/pricing.ts`
- Test: `src/lib/pricing.test.ts`

**Step 1: Write the failing test**

Create tests that assert:
- fixed-price BuildaCheck offers are discoverable
- DSI add-ons total correctly
- quoted packages are excluded from fixed-price booking

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/pricing.test.ts`
Expected: FAIL because the pricing module does not exist yet.

**Step 3: Write minimal implementation**

Add shared product, pricing, FAQ, workflow, and technology data plus helper functions for fixed-price booking totals.

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/pricing.test.ts`
Expected: PASS

### Task 2: New routes and site architecture

**Files:**
- Create: `src/app/buildacheck/page.tsx`
- Create: `src/app/digital-site-intelligence/page.tsx`
- Create: `src/app/pricing/page.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/layout.tsx`

**Step 1: Add the new top-level routes**

Implement overview pages for BuildaCheck, DSI, and Pricing using the shared catalog.

**Step 2: Rewire navigation and footer**

Expose the new pages in a way that matches the product architecture and preserves access to specialist service pages.

**Step 3: Refresh homepage positioning**

Add BuildaScan, combined workflow, and Citadel brand placement to the homepage.

**Step 4: Verify route metadata and sitemap**

Ensure the new pages are reflected in metadata, schema, and sitemap output.

### Task 3: Booking and FAQ updates

**Files:**
- Modify: `src/components/PricingCalculator.tsx`
- Modify: `src/app/book/page.tsx`
- Modify: `src/app/faq/page.tsx`

**Step 1: Replace the old property-type calculator**

Switch the calculator to fixed-price BuildaCheck and DSI packages, with exact totals only where pricing is fixed.

**Step 2: Surface quoted options separately**

Point combined packages, enterprise scanning, and specialist scopes to quote/contact paths instead of fake exact totals.

**Step 3: Add DSI FAQs and cross-sell guidance**

Update FAQ and booking copy so the DSI offer is visible across the site.

### Task 4: Assets and verification

**Files:**
- Create: `public/images/buildascan-logo.png`
- Create: `public/images/citadel-logo.png`

**Step 1: Add supplied logos to public assets**

Copy the user-provided logos into the app’s public image directory.

**Step 2: Run verification**

Run:
- `npx vitest run src/lib/pricing.test.ts`
- `npm run lint`
- `npm run build`

Expected: all commands pass.
