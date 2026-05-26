## Why

The map toggle pills in MapSection look like disabled labels rather than interactive controls. On mobile (no hover), there is zero affordance — users don't know they can tap to switch between map locations. The result: the Punto de Encuentro map is effectively hidden.

## What Changes

- Wrapping the toggle pills in a segmented control container to visually signal "this is a group of options"
- Adding a map-pin icon (`📍`) to each pill for visual weight and thematic connection to the map
- One-time breath-pulse animation on the inactive pill when the section scrolls into view, drawing attention
- Updating the active/inactive pill styling with stronger contrast and a solid container background
- All changes are responsive (stack vertically on small screens via flex-wrap)

## Capabilities

### New Capabilities
- `interactive-map-toggle`: Visual affordance system for the map location toggle — includes the segmented container layout, map-pin icons, and the one-time breath-pulse animation. This covers the visual presentation and animation behavior of the pills, not the toggle logic (which already works).

### Modified Capabilities

None. The toggle logic already works; this is purely a visual/UX change.

## Impact

- `src/components/sections/MapSection.astro` — pill markup and classes
- `src/styles/animations.css` — new `@keyframes` and utility class for the breath pulse
- `src/lib/animate-on-scroll.ts` — may need to also trigger the pulse (or handled inline in MapSection script)
- No changes to `convention.ts`, `types.ts`, or any data layer
