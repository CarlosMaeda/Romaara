# Romaara — Improvement TODO

Live working document for the Romaara honey brand website (React 18 + Vite + Bootstrap).

**Legend**
- **Priority**: `P0` = must fix (broken/build/runtime), `P1` = high impact, `P2` = nice to have
- **Effort**: `S` small (< 30 min) · `M` medium (0.5–2 h) · `L` large (> 2 h)
- Areas: **Design** · **UX/UI** · **Content** · **Performance** · **Functionality**

---

## 0. Blocker fixes — do these first (P0)

- [x] **P0 · S · `src/App.jsx:11`**: Fix broken import of `Home` — it points to `../../Romaara-web/src/components/sections/Home`, a folder that does not exist. The app cannot build. Change to the local `./components/sections/Home`. **DONE** — import fixed; build passes.
- [x] **P0 · S · `index.html:8-17`**: Fix broken favicon links — they point to `../Romaara-web/src/assets/img/Abeja.png` (nonexistent sibling). Use real assets already in the repo: `src/assets/img/favicon.svg` / `Abeja_favicon.svg` / `favicon.png`. **DONE** — copied `favicon.svg`/`favicon.png` to `public/`, `index.html` now points to `/favicon.svg` + `/favicon.png`.
- [x] **P0 · S · `Navbar.jsx:40` vs `App.jsx:28`**: Case mismatch — Navbar "Contacto" links to `/formulario` but the route is `/Formulario`. React Router is case-sensitive, so clicking Contacto hits the catch-all and redirects to Home. Contact page is unreachable from the nav. **DONE** — route normalized to lowercase `/formulario` in `App.jsx`.
- [x] **P0 · S · `Formulario1.jsx:146`**: Submit button is wired to `onClick={SubmitEvent}` — the browser's global `SubmitEvent` **class**, not a handler. Clicking throws a TypeError in console. Use a real handler (or just `type="submit"` + `onSubmit`). **DONE** — removed broken `onClick`, `Boton` now renders `type="submit"`.

## 0.5 Tooling migration — DONE

- [x] **P0 · M**: Migrated package manager from npm to **pnpm**. Removed `package-lock.json`, generated `pnpm-lock.yaml`. Created `pnpm-workspace.yaml` with `allowBuilds: esbuild: true` (pnpm 11 syntax — the old `onlyBuiltDependencies` field no longer works; pnpm 11 ignores the `pnpm` key in `package.json`). Verified: `pnpm install` + `pnpm run build` pass.
- [x] **P0 · S**: Fixed the `predeploy` script in `package.json` — switched to `pnpm run build`.

## 0.6 Vercel deploy — DONE 🎉

- [x] **P0**: Romaara is now LIVE at **https://romaara.vercel.app** (HTTP 200, title renders).
- [x] **Root cause of `DEPLOYMENT_NOT_FOUND`**: project was linked on Vercel but every build failed. Two issues stacked:
  1. Vercel detected `pnpm-lock.yaml` and used **pnpm 9.x** (based on project creation date), which does NOT understand the modern `pnpm-workspace.yaml` settings format → `ERROR: packages field missing or empty`.
  2. Case-sensitivity bug: `Home.jsx` imported `miel.jpg` but the file is `Miel.jpg` — works on Windows (NTFS case-insensitive), fails on Linux build → build died in "transforming...".
- [x] **Fixes applied**: `vercel.json` with `installCommand: corepack pnpm install --frozen-lockfile` + `buildCommand: corepack pnpm run build` (forces pnpm 11.2.2 via corepack); `package.json` now has `packageManager: pnpm@11.2.2` + `engines.node: 24.x` (20.x is deprecated on Vercel, will hard-fail after 2026-10-01); `Home.jsx` import fixed to `Miel.jpg`.
- [x] **P2 · S**: GitHub integration IS ACTIVE — the pushes triggered automatic production deploys (verified: auto-deploy `n5pqav56w` Ready after the last push). Earlier note about "no webhook" was wrong: Vercel uses a GitHub App, which does not appear in the classic repo-hooks API. `vercel git connect` confirms `CarlosMaeda/Romaara` is connected. Deploys now auto-trigger on every push to main — keep `vercel.json` corepack config in the repo so builds keep passing.

## 1. Design

- [ ] **P1 · M · `src/styles/index.css:16-17`**: Remove `html { font-size: 10px }` — it shrinks every Bootstrap `rem`-based component to 62.5% of intended size and breaks the whole design scale.
- [ ] **P1 · L**: Define a coherent design system for the brand: color palette (current brand yellow `rgba(243, 228, 16, 0.705)` on dark navbar has contrast issues), typography scale, spacing tokens, button styles. Consolidate `index.css`, `custom.css`, `App.css` into one source of truth.
- [ ] **P1 · M · `Home.jsx:38-70`**: Redesign the "GALERIA DE PRESENTACIONES" section — it shows only 3 cards with Lorem-ipsum text; the 300 g card uses `ft-fondo.jpg` (a background image), not a product shot. Give it a proper gallery/product layout with real photos.
- [ ] **P2 · S · `src/components/buttons/Boton.css:4`**: Fix invalid `padding: 10px, 20px;` (comma makes it invalid; the property is ignored).
- [ ] **P2 · S · `src/components/forms/Formulario.css:6`**: Fix invalid `opacity: 90%` (should be `0.9`).
- [ ] **P2 · M**: Add a light/dark or seasonal theme hook, or at least polish hover/active states consistently across cards, buttons, and nav.
- [ ] **P2 · M**: Review responsive behavior — several `@media` breakpoints in `custom.css` are empty; test all routes at 360px / 768px / 1280px.

## 2. UX/UI

- [ ] **P1 · M · `Navbar.jsx`**: Make nav links reflect the current route — remove the hardcoded `nav-link active` on "Inicio" (`:26`), use `NavLink` with `aria-current`.
- [ ] **P1 · S · `Navbar.jsx:45-53`**: Fix the "Particularidades" dropdown — it is a `Link` with `href="#"` and no `to` (invalid). Use `NavDropdown` from react-bootstrap (drop the CDN JS dependency) and add `aria-haspopup`.
- [ ] **P1 · S · `Navbar.jsx:34,69`**: "Nosotros" and "Recetas" are disabled with no routes. Either implement the routes (see Content) or remove them — disabled nav items mislead users.
- [ ] **P1 · M · `Beneficios.jsx:51`**: Benefits are crammed into one `col-12 col-md-4` column at fixed 30rem width — poor stacking on desktop. Use a proper responsive grid.
- [ ] **P1 · M · `newCard.jsx`**: Cards are fixed at `width: "32rem"` — make them fluid/responsive with `w-100` or a card grid.
- [ ] **P2 · S**: Replace generic image alts (`alt="Miel"` ×3 in Home, `alt="curiosidades"` ×2 in Curiosidades) with descriptive, meaningful alt text.
- [ ] **P2 · S · `Footer.jsx`**: "Derechos de autor © 2023" is stale — make the year dynamic or update it.
- [ ] **P2 · S**: Add visible focus states for keyboard navigation across all interactive elements.
- [ ] **P2 · M**: Add empty/loading/error states where sensible (form submission feedback, routes) so the UI never feels dead.

## 3. Content

- [ ] **P1 · M · `Home.jsx:38-70`**: Replace Lorem-ipsum product descriptions with real content — actual product names, weights (1 Kg / 500 g / 300 g), descriptions, and prices.
- [ ] **P1 · L · Recipes**: Recipe content exists only as images in `src/assets/img/Flan_de_miel/`, `Muslos_a_la_miel/`, `Salsa_de_mostaza_y_miel/` (~3.8 MB, zero imports). Build the **Recetas** page: ingredients + steps per recipe, a route `/recetas`, and enable the nav link.
- [ ] **P1 · M · `Nosotros.jsx`**: Page is a 0-byte stub and `/nosotros` has no route. Write real brand story content (about the honey, the producers, origin) and add the route.
- [ ] **P1 · S · `index.html`**: Add `meta description`, Open Graph and Twitter card tags. Currently the SPA has zero SEO tags beyond the title.
- [ ] **P2 · S**: Set per-route document titles (`document.title` / a small `usePageTitle` hook) instead of one title for every route.
- [ ] **P2 · S**: Add real contact details to the form area (email, phone, social links) so the contact page has substance.
- [ ] **P2 · M**: Move hardcoded content arrays (`datosBeneficios.jsx`, `datosCuriosidades.jsx`, product data) into a `src/data/` folder as clean JS/JSON data files — prepares the site for future CMS/editing and removes duplication.
- [ ] **P2 · S**: Remove the giant duplicated content block comments (benefits duplicated in `Beneficios.jsx:1-32`, curiosities in `datosCuriosidades.jsx:50-61`).

## 4. Performance

- [ ] **P1 · M · Images**: Add `loading="lazy"` + `width`/`height` to all images; generate `srcset`/`webp` variants. Biggest loaded image: `ft-abejaFlor.jpg` (472 KB) on `/curiosidades`.
- [ ] **P1 · M · `custom.css:1`**: Trim the Google Fonts `@import` — 11 font families are loaded but only ~3 are used. Keep 2–3 (e.g., headings + body) and preload with `display=swap`.
- [ ] **P1 · M · Bootstrap**: Triple source today — CDN CSS (`index.html:19-24`), CDN JS bundle (`index.html:29-33`), and npm `bootstrap` (unused). Pick ONE path: use react-bootstrap entirely (already a dependency) and drop both CDN tags.
- [ ] **P1 · M · Code splitting**: Add `React.lazy` per route (`Home`, `Formulario`, `Curiosidades`, `Beneficios`) so the main bundle doesn't include everything upfront.
- [ ] **P2 · M · Images**: Decide the fate of the unused recipe images (~3.8 MB in repo) — either implement the recipes page or remove them from the repo.
- [ ] **P2 · S · Duplicated assets**: 8 image files exist twice — in `public/src-Public/img-Public/` and `src/assets/img/`. Consolidate to one location.
- [ ] **P2 · S · `Home.jsx:4`**: Case-sensitivity bug — imports `miel.jpg` but the file is `Miel.jpg`. Works on Windows (case-insensitive NTFS) but breaks Linux CI/GitHub Actions. Fix the import or rename the file.
- [ ] **P2 · S · `package.json`**: Formik + Yup are dependencies but never imported in active code — either use them for the real form (recommended) or remove them from `package.json`/lockfile.

## 5. Functionality

- [ ] **P1 · M · `Formulario1.jsx`**: The contact form submits nowhere — `handleSubmit` only `preventDefault`s, logs to console, and shows an `alert`. Wire it to a real destination: Formspree / EmailJS / a small backend endpoint. Add proper success/error feedback.
- [ ] **P1 · M · `Home.jsx:9-27`**: "BENEFICIOS" buttons on product cards are inert — the handlers return JSX from an onClick (the return value is discarded, so nothing happens). Decide the intent: scroll to benefits, navigate, or expand content — then implement it.
- [ ] **P1 · S · PropTypes**: `newCard.jsx:29` declares `enlace` but Home passes `click` (not in propTypes) — runtime warning. Align prop names/contracts.
- [ ] **P2 · M · `App.jsx`**: Add a 404 page instead of the silent catch-all redirect to `/` — better feedback for unknown URLs.
- [ ] **P2 · S · `Formulario1.jsx:33,36`**: Remove `console.log` in the production submit path.

## 6. Housekeeping — dead code & cleanup

- [ ] **P1 · M**: Delete unused/dead files (verified not imported by active code):
  - `src/components/cards/Card.jsx` (unused — `newCard.jsx` is active)
  - `src/components/cards/Tarjeta.jsx` (1 blank line)
  - `src/components/cards/datosBeneficios.jsx` (0 bytes)
  - `src/components/cards/imagenes.jsx` (unused image helper)
  - `src/components/forms/Formulario.jsx` (241 lines, entirely commented out)
  - `src/components/forms/FormBootstrap.jsx` (199 lines, entirely commented out)
  - `src/components/sections/Titulo.jsx` (unused)
- [ ] **P2 · S**: Run `npm run lint` and fix all warnings (`.eslintrc.cjs` has `react-refresh/only-export-components` warn; `max-warnings 0` means the current code would fail lint).
- [ ] **P2 · S**: Verify the build + deploy pipeline locally (`npm run build`) before pushing — the broken import means CI/GitHub Pages is currently failing.

## 6. Testing suite — NEW (pending)

> The project currently has **zero tests**. A full test suite must be built out. The project supports testing after the pnpm migration.

- [ ] **P1 · M**: Set up the test toolchain — add `vitest` + `@testing-library/react` + `@testing-library/jest-dom` + `jsdom` as devDependencies; add a `"test": "vitest"` script to `package.json`; add a vitest config (or extend `vite.config.js` with the `test` block).
- [ ] **P1 · S**: Add a smoke/render test for `App.jsx` — assert that the router renders the Home route, the Navbar, and the Footer without crashing.
- [ ] **P1 · M**: Add component tests for the Navbar — renders brand + links, active link state, dropdown opens, and nav links navigate to the correct routes (especially `/formulario` contact).
- [ ] **P1 · M**: Add form tests for `Formulario1.jsx` — renders all fields, email format validation (red border / invalid state), submit calls the expected handler, required-field blocking.
- [ ] **P2 · M**: Add tests for `Home.jsx` — hero renders, product cards render with correct props, card "BENEFICIOS" buttons behave as intended once implemented.
- [ ] **P2 · M**: Add tests for `Beneficios.jsx` and `Curiosidades.jsx` — data arrays render, both curiosity columns split correctly (index 0–5 vs 6+).
- [ ] **P2 · S**: Add a basic unit test for the data helpers (`datosBeneficios`, `datosCuriosidades`) — arrays are non-empty and well-formed (strings, no missing fields).
- [ ] **P2 · S**: Wire coverage reporting (`vitest --coverage`) and set a baseline threshold so new code doesn't drop coverage.
- [ ] **P2 · M**: Add CI — GitHub Actions workflow that runs `pnpm install` + `pnpm test` + `pnpm run build` on PRs to catch regressions before deploy.

---

## Suggested execution order

1. **P0 blocker fixes** (§0) — get a working build + reachable contact page.
2. **Housekeeping** (§6) — delete dead code so the diff is clean.
3. **Functionality** (§5) — real form, working buttons, prop contracts.
4. **Design + UX/UI** (§1, §2) — design system, nav, grids, responsive.
5. **Content** (§3) — real product copy, Nosotros, Recetas page, SEO.
6. **Performance** (§4) — images, fonts, code splitting, bundle hygiene.
