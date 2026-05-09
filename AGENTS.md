# Repository Guidelines

## How to Use This Guide

- Start here for all development in the `gnosis-convention-landing` project.
- Each major area has a skill in the `/skills/` directory with specific patterns.
- When in doubt, prefer composition, fluid layout, and declarative configuration.

## Available Skills

Use these skills for detailed patterns on-demand:

### Generic Skills (Any Project)
| Skill | Description | URL |
|-------|-------------|-----|
| `tailwind-setup` | Configure Tailwind with IGA theme, cn() utility | [SKILL.md](skills/tailwind-setup/SKILL.md) |
| `astro-component` | Create typed Astro components with fluid layout | [SKILL.md](skills/astro-component/SKILL.md) |
| `composable-design` | Component architecture principles | [SKILL.md](skills/composable-design/SKILL.md) |
| `composable-wrapper` | Wrapper/container patterns with slots | [SKILL.md](skills/composable-wrapper/SKILL.md) |
| `convention-section` | Add sections to the landing page playlist | [SKILL.md](skills/convention-section/SKILL.md) |
| `fluid-layout` | Fluid responsive layouts without hardcoded sizes | [SKILL.md](skills/fluid-layout/SKILL.md) |
| `astro-animation` | Scroll-triggered animations (CSS + IntersectionObserver) | [SKILL.md](skills/astro-animation/SKILL.md) |

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action | Skill |
|--------|-------|
| Configuring Tailwind, modifying tailwind.config.ts, or adding theme tokens | `tailwind-setup` |
| Creating or modifying any `.astro` component | `astro-component` |
| Designing component architecture or reviewing structure | `composable-design` |
| Creating layout wrappers, containers, or slot-based components | `composable-wrapper` |
| Adding, removing, or reordering landing page sections | `convention-section` |
| Writing layout code or making components responsive | `fluid-layout` |
| Adding animations, scroll effects, or transitions | `astro-animation` |

---

## Project Overview

Landing page estática para convenciones del IGA (Instituto Gnóstico de Antropología) Chile. 
Reutilizable cada dos años editando un único archivo de configuración (`convention.ts`).

| Aspect | Detail |
|--------|--------|
| **Framework** | Astro (Static Site Generation) |
| **Language** | TypeScript (code), Spanish (UI content) |
| **Styles** | Tailwind CSS |
| **Fonts** | @fontsource/merriweather + @fontsource/inter (local, no Google Fonts) |
| **Icons** | astro-icon + Lucide (SVG inline) |
| **Maps** | Leaflet + OpenStreetMap (no API key) |
| **Videos** | Native HTML5 `<video>` from Cloudflare R2 |
| **Assets** | Cloudflare R2 bucket (photos, videos) |
| **Hosting** | Static build served from collaborator's server |

## Architecture

### Three-Layer Component Architecture
- **Primitives** (`src/components/primitives/`): Atoms (Button, Card, Container). Zero business logic.
- **Sections** (`src/components/sections/`): Blocks (HeroSection, AboutSection). Presentational, fed by props.
- **Layouts** (`src/layouts/`): Shells (MainLayout). HTML structure, meta tags, fonts.

### The Playlist Pattern
The page is assembled declaratively from `convention.ts`:
```typescript
sections: ['hero', 'about', 'schedule', 'gallery', 'map', 'lodging']
```
`index.astro` iterates this array to render sections in order.

### Single Source of Truth
`src/data/convention.ts` contains all configurable content:
- Event metadata (title, date, location)
- Contact info
- Asset references (photos, videos from R2)
- Schedule mode (inline or PDF)
- Map coordinates
- Lodging list
- Section playlist order

## Key Principles

1. **Composable**: Build UIs by nesting wrappers: `<MainLayout><Container><Section><Card /></Section></Container></MainLayout>`
2. **Fluid Layout**: No static widths/heights. Use `flex`, `grid`, `clamp()`, `gap`.
3. **Modular Animations**: CSS centralized in `src/styles/animations.css`, JS modular in `src/lib/animate-on-scroll.ts`. No inline animations.
4. **Type Safety**: All props typed. Build fails if `convention.ts` is incomplete.
5. **No Business Logic in Primitives**: A Button is just a button. It doesn't know it's for a convention.

## File Structure

```
src/
  components/
    primitives/     # Button, Card, Container, SectionTitle...
    sections/       # HeroSection, AboutSection, ScheduleSection...
  data/
    convention.ts   # Single source of truth
    types.ts        # TypeScript interfaces
  lib/
    utils.ts        # cn() helper
    animate-on-scroll.ts  # IntersectionObserver
  styles/
    animations.css  # Centralized animation utilities
  layouts/
    MainLayout.astro
  pages/
    index.astro     # Playlist assembly
public/
  (static assets)
skills/
  (AI agent skills)
```

## Development Workflow

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Critical Rules

- NEVER use hex colors in className: use Tailwind theme tokens (`bg-iga-copper`)
- NEVER use `var()` in className
- NEVER define `@keyframes` inside `.astro` components
- NEVER hardcode static widths or heights
- NEVER import `convention.ts` inside primitives or layouts
- ALWAYS use `cn()` for conditional class merging
- ALWAYS expose `class?: string` prop on components
- ALWAYS prefer `gap` over `margin` for spacing
- ALWAYS keep nesting shallow (max 4 levels)
