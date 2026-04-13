# Gemini Page Imagery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Gemini-generated hero imagery to the pages that currently lack meaningful visuals, optimize those assets for web delivery, and wire them into the site without adding any watermark-obscuring behavior.

**Architecture:** Generate two hero images outside the app code, save optimized WebP assets under `public/images/`, and reference them through a small typed manifest in `src/lib/pageImagery.ts`. Use a focused test to verify the manifest points to real optimized files before updating the page components.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, Tailwind CSS, Gemini 3.1 Flash Image Preview, Python/Pillow for post-generation optimization.

### Task 1: Add manifest-first test coverage

**Files:**
- Create: `src/lib/pageImagery.test.ts`
- Create: `src/lib/pageImagery.ts`

**Step 1: Write the failing test**

Add a Vitest file that expects:
- `pageImagery.dsiHero` and `pageImagery.pricingHero` to exist
- both assets to use `.webp`
- both alt strings to be non-empty
- both referenced files to exist under `public/`

**Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/pageImagery.test.ts`
Expected: FAIL because `src/lib/pageImagery.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/lib/pageImagery.ts` with typed metadata for the two hero assets.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/pageImagery.test.ts`
Expected: PASS after the files and manifest exist.

### Task 2: Generate and optimize the hero assets

**Files:**
- Create: `public/images/hero-dsi-intelligence.webp`
- Create: `public/images/hero-pricing-intelligence.webp`

**Step 1: Generate a DSI hero**

Use Gemini 3.1 Flash Image Preview to create a premium construction-intelligence scene for the Digital Site Intelligence page.

**Step 2: Generate a pricing hero**

Use Gemini 3.1 Flash Image Preview to create a premium pricing/commercial workflow scene for the Pricing page.

**Step 3: Optimize both outputs**

Convert the selected outputs to WebP, size them appropriately for hero usage, and keep filenames stable.

**Step 4: Re-check for visible corner artifacts**

If an output contains a visible watermark or branded artifact, discard it and regenerate instead of masking or cropping to hide it.

### Task 3: Wire the assets into the pages

**Files:**
- Modify: `src/app/digital-site-intelligence/page.tsx`
- Modify: `src/app/pricing/page.tsx`
- Modify: `src/lib/pageImagery.ts`

**Step 1: Update the DSI hero**

Replace the logo-only hero treatment with a generated visual that fits the existing copper-and-slate design language while keeping the BuildaScan logo elsewhere on the page.

**Step 2: Update the Pricing hero**

Add the generated pricing hero as a proper visual section so the page no longer opens with text alone.

**Step 3: Keep layout changes minimal**

Avoid broad redesign; fit the new visuals into the current premium construction tone.

### Task 4: Verify the change

**Files:**
- Test: `src/lib/pageImagery.test.ts`

**Step 1: Run targeted tests**

Run: `npm test -- src/lib/pageImagery.test.ts`
Expected: PASS

**Step 2: Run full verification**

Run:
- `npm test`
- `npm run lint`
- `npm run build`

Expected: all pass.
