## Context

The MapSection currently renders location identity (`placeName` and `address`) below the map embed, after the decorative bottom line. The `placeName` uses `font-cinzel-regular text-iga-navy uppercase` — the same family, color, and case as the section title. This creates visual competition: the eye doesn't know if "Centro de Eventos Destino Valparaíso" is the section heading or a detail. The fix is to move it above the map and use differentiated styling.

## Goals / Non-Goals

**Goals:**
- Move `placeName` + `address` between toggle pills and map embed
- Apply distinct typography: serif/copper for placeName, sans/muted for address
- Keep toggle JS working: location text updates on pill click
- Keep all existing decorative elements (lines, frame, corner ornaments) in same order

**Non-Goals:**
- No changes to `sectionsConfig.map.subtitle` or section title
- No data model changes
- No new component dependencies

## Decisions

### Decision 1: Location info between pills and map frame
- **Chosen**: Insert the location `<div>` between the pills container and the decorative top line
- **Rationale**: User reads: pills → "which map?" → location name → "what place?" → map → "where exactly?". Natural progressive disclosure.
- **Alternative**: below the top decorative line but above the map. Same layout, just one element shift.

### Decision 2: Typography — serif copper + sans muted
- **Chosen**: `placeName` = `font-serif text-iga-copper font-bold italic` at clamp size; `address` = `font-sans text-iga-foreground/60 text-sm`
- **Rationale**: Serif italic copper reads as a label/accent, distinct from the cinzel title. Sans-serif muted address reads as metadata. Follows existing theme tokens.
- **Alternative**: use `font-cinzel-regular` at smaller size — rejected because it still looks like a title.

## Risks / Trade-offs

- **[Risk] Layout shift on toggle**: Moving text in DOM on toggle could cause map frame to reflow. **Mitigation**: container has fixed size; text change is same element, same space.
- **[Trade-off] Extra vertical space**: Adding a block between pills and map increases section height slightly. Acceptable — the content is more scannable.
