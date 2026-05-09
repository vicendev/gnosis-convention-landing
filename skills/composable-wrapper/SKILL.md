---
name: composable-wrapper
description: >
  Create reusable wrapper/container components using Astro slots for nested composition.
  Trigger: When building layout wrappers, cards, containers, or any component that envelops children.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components, src/layouts]
  auto_invoke: "Creating layout wrappers, containers, or slot-based components"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Patterns

### Basic Wrapper
```astro
---
interface Props { class?: string; }
const { class: className } = Astro.props;
---
<div class={cn("mx-auto w-full px-4", className)}>
  <slot />
</div>
```

### Named Slots
```astro
<article>
  <header><slot name="header" /></header>
  <div><slot /></div>
  <footer><slot name="footer" /></footer>
</article>
```

### Transparent Wrapper
```astro
<div class="animate-fade-up animate-on-scroll">
  <slot />
</div>
```

### Conditional Wrapping
```astro
{href ? <a href={href}><slot /></a> : <slot />}
```

## Conventions
- Wrappers never assume what their children are
- Always expose `class?: string` prop for style extension via `cn()`
- Use `<slot />` as default content area; named slots only for semantically different regions
- Keep nesting shallow (max 3-4 levels)
- A wrapper does ONE thing: spacing, borders, animation, or responsive behavior
- Prefer `<Wrapper><Child /></Wrapper>` over `<Wrapper children={Child} />`

## Anti-patterns
- ❌ Receiving children as a prop: `<Wrapper children={<Child />} />`
- ❌ Hardcoding specific child components inside a wrapper
- ❌ Wrappers with side effects depending on children content
- ❌ Deep nesting beyond 4 levels without flattening
