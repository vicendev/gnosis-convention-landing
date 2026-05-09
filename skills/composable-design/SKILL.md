---
name: composable-design
description: >
  Design UI by composing small focused components instead of monolithic blocks.
  Trigger: When architecting components, deciding on props vs slots, or reviewing component granularity.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components, src/layouts, src/pages]
  auto_invoke: "Designing component architecture or reviewing component structure"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Principles

### Composition over Configuration
Create small components that do one thing well. Combine them to build complex UIs.

**❌ Don't:**
```astro
<HeroSection variant="minimal" showContact={false} showDate={true} />
```

**✅ Do:**
```astro
<HeroSection>
  <HeroTitle>Convención 2026</HeroTitle>
  <HeroMeta date="15 Agosto" location="Santiago" />
</HeroSection>
```

### Three-Layer Architecture
- **Primitives** (`src/components/primitives/`): Atoms. Button, Card, Container. Zero business logic.
- **Sections** (`src/components/sections/`): Blocks. HeroSection, AboutSection. Presentational, fed by props.
- **Layouts** (`src/layouts/`): Shells. MainLayout. HTML structure, fonts, meta tags.

### Props as the Only Interface
Components must not depend on global variables or context. They receive everything via typed props.

### The Slot Pattern
Use `<slot />` to let parents inject content. Use named slots for optional regions.

### No Business Logic in Primitives
A `Button` is just a button. A `Card` is just a container. Remain agnostic to the domain.

### The Playlist Pattern
The page is assembled from an array of sections in `convention.ts`, making layout 100% declarative.

## Conventions
- Primitives live in `src/components/primitives/`
- Sections live in `src/components/sections/`
- A component with more than 5 props is a candidate for decomposition
- Prefer slots over props for content injection
- Never import `convention.ts` inside a Primitive or Layout
