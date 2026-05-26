## Context

The landing page currently displays a single map location via MapSection.astro, which receives a `ConventionMap` object and renders an embed iframe, address, instructions, optional directions video, and two action buttons. For the XI Convención, a second location (initial meeting point) is needed alongside the existing conference venue. Future conventions may have 1 or more locations, so the design must be flexible without code changes per event.

The existing architecture uses a "playlist pattern" where `index.astro` iterates `convention.sections`. The `map` section renders `<MapSection>` and currently passes a single object. The component already uses client-side JavaScript for lazy loading (`initLazyLoad`). The gallery component already implements client-side state switching (image carousel with crossfade), providing an analogous pattern for map toggling.

## Goals / Non-Goals

**Goals:**
- Enable 1+ map locations controlled entirely from `convention.ts`
- Provide a toggle UI (pills) only when multiple maps are configured
- Switch embed iframe, address text, instructions, action URLs, and optional video dynamically on toggle
- Maintain all existing decorative framing, corner ornaments, and loading spinners
- Keep backward compatibility for single-map configurations (no visual regression)
- Keep `directionsVideoUrl` optional per map — video section hidden if absent

**Non-Goals:**
- No Leaflet or interactive map library changes (embed stays as Google Maps iframe)
- No changes to section playlist order or navigation links
- No new npm dependencies
- No API or build configuration changes

## Decisions

### Decision 1: `map` as array instead of dual fields
- **Chosen**: `map: ConventionMap[]` in `ConventionData`
- **Alternatives considered**: Adding `secondaryMap` field, using discriminated union
- **Rationale**: Cleanest type signature, works for 1 or N locations, no branching logic in types, matches user intuition
- **Trade-off**: Existing convention.ts needs migration (wrap single object in array)

### Decision 2: Toggle via client-side JS (not Astro islands)
- **Chosen**: Plain JavaScript in `<script>` tag, same pattern as gallery carousel
- **Alternatives considered**: Astro client directive (`client:load`), htmx, Alpine.js
- **Rationale**: No new dependencies. The component already uses inline `<script>` for lazy load. Gallery proves this pattern works. State is trivial (current index). Astro islands are overkill for a simple index swap.
- **Trade-off**: JS runs per visitor, but it's a static site with minimal JS

### Decision 3: Generic section subtitle, dynamic location text below embed
- **Chosen**: `sectionsConfig.map.subtitle` becomes generic (e.g. "Puntos de encuentro del evento"). Per-map `placeName · address` renders as a new `<div>` below the embed, updated on toggle.
- **Alternatives considered**: Dynamic section subtitle via JS, keeping static subtitle
- **Rationale**: Section subtitle is a single string for the whole section — making it dynamic would require JS to mutate SectionTitle, coupling presentational concerns. Better to keep subtitle as section-level metadata and show map-specific info in the map area.

### Decision 4: Pills visible only if `map.length > 1`
- **Chosen**: Conditionally render the pill container based on array length at build time
- **Rationale**: Zero JS overhead for single-map events. Server-rendered conditional avoids unnecessary DOM nodes.

### Decision 5: Embed iframe src swapped directly on toggle
- **Chosen**: On pill click, set `iframe.src = activeMap.embedUrl` directly, show spinner, hide spinner on iframe `onload`
- **Alternatives considered**: Multiple iframes with visibility toggle, lazy-load each on first activation
- **Rationale**: Single iframe keeps DOM clean. Google Maps embed loads fast. Spinner provides feedback. Multiple iframes would load N maps on page load, wasting bandwidth.
- **Trade-off**: Brief loading flash on toggle (mitigated by spinner)

## Risks / Trade-offs

- **[Risk] Google Maps embed CORS/load timing**: iframe `onload` can be unreliable on slow connections → **Mitigation**: Add a fallback timeout (5s) that hides spinner regardless
- **[Risk] directions video switching**: If map A has video and map B does not, hiding the video section on toggle could cause layout shift → **Mitigation**: Keep video container in DOM but hide with `display: none`; layout does not reflow
- **[Risk] Lazy-load interaction**: The initial embed uses `data-src` + `initLazyLoad`. Subsequent toggles set `src` directly (lazy observer already fired) → **Mitigation**: Separate the initial load (lazy) from toggle loads (direct), no conflict
- **[Trade-off] Two maps with very different fields**: Not all ConventionMap fields are useful for every location (e.g. `directionsVideoUrl`). Each map entry independently configures only what it needs — the UI adapts per active map
