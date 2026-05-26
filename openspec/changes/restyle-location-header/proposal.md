## Why

The map section currently shows `placeName` and `address` below the map embed, using styles similar to the section title (cinzel-regular, navy, uppercase). This creates visual confusion between the location name and the section heading. Moving location info above the map and applying distinct styling improves readability and hierarchy.

## What Changes

- Move `placeName` and `address` from below the map embed to above it (between toggle pills and map frame)
- Apply distinct styling: serif/copper for placeName, sans-serif/muted for address
- Location info updates dynamically on toggle (same as today)

## Capabilities

### New Capabilities
- `map-location`: Presentation of the active map location identity (placeName, address) above the map embed with distinct visual styling that does not compete with the section title

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- `src/components/sections/MapSection.astro` — rearrange DOM order, update styles, adjust toggle JS
- No changes to types, data, or other components
