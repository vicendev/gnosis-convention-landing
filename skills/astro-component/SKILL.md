---
name: astro-component
description: >
  Create reusable Astro components with typed props, fluid layout, and Tailwind classes via cn().
  Trigger: When creating or modifying any .astro component, primitive, or section.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components, src/layouts]
  auto_invoke: "Creating or modifying Astro components"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Component Template

```astro
---
interface Props {
  class?: string;
}

const { class: className } = Astro.props;
import { cn } from '@/lib/utils';
---

<div class={cn("base-classes", className)}>
  <slot />
</div>
```

## Critical Rules

- ALWAYS define `interface Props` with TypeScript
- ALWAYS expose `class?: string` prop for style extension
- ALWAYS use `cn()` for conditional class merging
- NEVER use inline `style` attributes
- NEVER hardcode static widths or heights (e.g. `w-[1200px]`, `h-[500px]`)
- NEVER import business data (e.g. `convention.ts`) inside primitives
- ALWAYS use `flex` or `grid` for layout
- ALWAYS prefer `gap` over `margin` for spacing between siblings
- PascalCase filenames: `HeroSection.astro`, `Button.astro`
