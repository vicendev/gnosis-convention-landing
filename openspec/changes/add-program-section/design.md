## Context

The landing page for the XI Convención Gnóstica Nacional assembles sections declaratively via a playlist array in `convention.ts`. Each section is a typed Astro component under `src/components/sections/`, styled with Tailwind v4 using the IGA theme tokens (`iga-copper`, `iga-gold`, `iga-forest`, `iga-navy`). Assets (images, videos, PDFs) are served from Cloudflare R2 via `ASSET_BASE_URL`.

The existing sections follow a consistent pattern: `SectionTitle` + `Container` + decorative frame + animated entry (`animate-fade-up animate-on-scroll`). CTAs to external resources use `<a target="_blank">` (e.g., "Ver en Google Maps").

The PDF program must be added without introducing new dependencies, CORS requirements, or patterns that deviate from the established architecture.

## Goals / Non-Goals

**Goals:**
- A new `ProgramSection` component rendered between `promotion` and `registration`
- A typed `programPdf` field in `ConventionAssets` pointing to `pdfs/gnosis/programa_xi_convencion.pdf`
- A `program` config entry in `SectionsConfig` with title and subtitle
- Visual design consistent with existing sections (palette, typography, icon set, decorative framing, animations)
- PDF opens in a new browser tab (native PDF viewer) — no custom download logic

**Non-Goals:**
- No JavaScript-based fetch + blob download (avoids CORS dependency)
- No inline PDF viewer or embedded iframe
- No changes to `env.ts` or `ASSET_BASE_URL`
- No changes to the layout, navigation, or footer

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| PDF interaction | `<a target="_blank">` | Cross-origin R2 URL. Fetch+blob requires CORS headers on the bucket. Native PDF viewer on all modern browsers provides both viewing and download. Same pattern as existing map links. |
| Frame style | Ornamental border with gradient glow | Match the `PromotionSection` video frame design (corner ornaments, subtle blur glow) for visual consistency, since it's the adjacent section. |
| Icon | `lucide:file-text` | Part of the existing Lucide icon set already used site-wide (via `astro-icon`). Alternative considered: `lucide:file-down` — but the primary action is viewing, not downloading. |
| Button variant | Solid `iga-copper` background | Contrasts with the text-based CTAs used elsewhere. The program is a primary action item, so a filled button communicates importance. |
| Section position | After `promotion`, before `registration` | Natural content flow: hero → video → program → registration (user sees the event, then the schedule, then signs up). |

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| User on browser without native PDF support (e.g., very old mobile) | The PDF still renders as a download in most cases; no browser in active use lacks PDF handling |
| PDF is large and slow to open | Native PDF viewer streams progressively; no spinner needed. If size is a concern, optimize the PDF before uploading. |
| Cross-origin PDF opened in new tab shows bare URL in address bar | Acceptable — all external resources (map links, videos) open in new tabs. Consistent experience. |
