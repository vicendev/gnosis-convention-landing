## Why

The landing page currently supports only a single map location. For the XI Convención, there are two key locations: the main conference venue (Destino Valparaíso) and an initial meeting point used on the first day. Future conventions may have one or multiple locations. A single-map model requires duplicating the entire section or manually editing HTML per event.

## What Changes

- **BREAKING**: `ConventionData.map` changes from a single `ConventionMap` object to `ConventionMap[]`
- **New field**: `ConventionMap.label` — display text for the toggle pill (e.g. "Centro de Conferencias", "Punto de Encuentro")
- **MapSection** becomes dynamic: if `map.length > 1`, renders toggle pills; otherwise renders as today (single map)
- UI shows `placeName · address` dynamically below the embed based on the active map
- `sectionsConfig.map.subtitle` becomes generic (not tied to a specific location)
- `directionsVideoUrl` remains optional per-map — only shown if present on the active map
- No icon libraries or external dependencies added

## Capabilities

### New Capabilities
- `maps`: Support for one or more map locations on the landing page, with client-side toggle between them. Each map has its own embed URL, directions URLs, address, instructions, and optional directions video. Toggle pills appear only when multiple maps are configured.

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- `src/data/types.ts` — add `label` to `ConventionMap`, change `map` to array
- `src/data/convention.ts` — update existing map entry with label, add second map entry, make `sectionsConfig.map.subtitle` generic
- `src/components/sections/MapSection.astro` — refactor to handle array input with toggle UI and dynamic content switching
- `src/pages/index.astro` — no changes needed (passes `convention.map` which becomes array transparently)
- No new dependencies
- No API or build config changes
