## Context

The `ConventionMap.advice` field was introduced as a plain `string?` to show an informational notice below the address in MapSection. The visual treatment used a left accent bar with serif italic text (quote style). This broke the centered layout and didn't feel like a notice.

The user requested: an object type with `label`, `bold`, and `size` controls, rendered as a centered badge pill with Iconify icon.

## Goals / Non-Goals

**Goals:**
- `advice` field becomes `{ label: string; bold?: boolean; size?: "normal" | "large" }`
- Badge pill centered, with `lucide:info` icon, text in `font-sans`
- `size` controls pill padding, font size, and icon dimensions
- `bold` adds `font-semibold` when true
- JS toggle reads the object and updates both text and style
- Default for `bold`: `false`, default for `size`: `"normal"`
- Second map entry uses `{ label: "...", bold: true, size: "large" }`

**Non-Goals:**
- No new dependencies
- No changes to the map toggle logic structure
- No changes to other map fields

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Advice type | Object `{ label, bold?, size? }` | Flexible, future-proof. User can set emphasis per location. |
| Pill style | `inline-flex` centered with icon | Matches site patterns (pills in map toggle, badges in lodging). Centered respects the location-info layout. |
| Size mapping | `normal`: `text-sm sm:text-base`, `large`: `text-base sm:text-lg` | `text-sm` fits mobile, `text-base` is minimum for readability. `large` adds one step up. |
| Icon | `lucide:info` via `astro-icon` | Already installed, no extra dependency. |
| Breaking change | `advice` type changes | Only one usage in convention.ts (second map). One-line migration. |

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Old string `advice` in convention.ts would fail TypeScript check | Build will catch it. Only one entry to migrate. |
| User forgets `size` default | Default `"normal"` is safe. `bold` defaults to `false`. Both are optional. |
