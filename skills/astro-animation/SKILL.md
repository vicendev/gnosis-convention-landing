---
name: astro-animation
description: >
  Implement scroll-triggered animations using centralized CSS and modular IntersectionObserver.
  Trigger: When adding animations, scroll effects, or transitions to components.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components, src/styles, src/lib]
  auto_invoke: "Adding animations, scroll effects, or transitions"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Architecture

- **CSS Centralized**: All keyframes and animation utilities live in `src/styles/animations.css`
- **JS Modular**: IntersectionObserver logic lives in `src/lib/animate-on-scroll.ts`
- **Declarative Usage**: Components only add CSS utility classes

## Setup

Ensure `src/styles/animations.css` is imported once in `MainLayout.astro`.

Ensure `src/lib/animate-on-scroll.ts` initializes on page load:

```typescript
export function initAnimateOnScroll(selector = '.animate-on-scroll') {
  if (typeof window === 'undefined') return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
```

## Available Animations

- `.animate-fade-up` — Fade in and translate up
- `.animate-fade-in` — Simple opacity fade

## Usage in Components

```astro
<section class="animate-fade-up animate-on-scroll">
  <h2>Title</h2>
</section>

<script>
  import { initAnimateOnScroll } from '@/lib/animate-on-scroll';
  initAnimateOnScroll();
</script>
```

## Adding New Animations

1. Open `src/styles/animations.css`
2. Add utility class following this pattern:

```css
.animate-slide-left {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-slide-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}
```

3. Use `.animate-slide-left.animate-on-scroll` in any component

## Critical Rules

- NEVER define `@keyframes` inside a `.astro` component
- NEVER write animation logic inline in a component
- NEVER import GSAP or AOS unless explicitly approved
- ALWAYS use `animate-on-scroll` class combined with an animation utility class
- Keep animations subtle and sober: max 800ms duration, ease-out easing
