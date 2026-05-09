---
name: fluid-layout
description: >
  Implement responsive fluid layouts without hardcoded sizes using flex, grid, clamp(), and gap.
  Trigger: When writing layout code, sizing elements, or making components responsive.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components, src/layouts, src/pages]
  auto_invoke: "Writing layout code or making components responsive"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Typography

Use `clamp()` for fluid font sizes. Define in global CSS or Tailwind config:

```css
h1 { font-size: clamp(2rem, 5vw + 1rem, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem); }
```

## Sizing

- ❌ `w-[1200px] h-[500px] max-w-[800px]`
- ✅ `w-full min-h-[50vh] min-h-[300px]`
- ✅ Let content drive height naturally

## Layout

- ALWAYS use `flex` or `grid`
- NEVER use absolute positioning or floats for layout
- Use `grid-cols-[repeat(auto-fit,minmax(280px,1fr))]` for responsive grids
- Use `min-w-0` inside flex children to prevent overflow

## Spacing

- ALWAYS use `gap-*` between siblings
- NEVER use `margin-top` / `margin-bottom` on individual elements
- Use `padding` for internal breathing room
- Use `gap` for space between items

## Responsive

- Mobile-first approach
- Test at 320px, 768px, and 1440px minimum
- Prefer fluid scaling (`clamp`, `minmax`, `%`) over breakpoint-based jumps
