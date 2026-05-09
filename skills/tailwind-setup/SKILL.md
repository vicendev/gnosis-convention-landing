---
name: tailwind-setup
description: >
  Configure Tailwind CSS in Astro with the IGA custom theme (colors, fonts, spacing).
  Trigger: When setting up Tailwind, modifying tailwind.config.ts, or adding theme tokens.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [root, src]
  auto_invoke: "Configuring Tailwind CSS or modifying theme tokens"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Theme Configuration

Configure `tailwind.config.ts` with IGA design tokens:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        iga: {
          background: '#F8F5F0',
          foreground: '#1F1F1F',
          copper: '#B87333',
          forest: '#2E5A4C',
          navy: '#1A3A5C',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

## cn() Utility

Create `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Critical Rules

- NEVER use hex colors in className: `bg-[#B87333]` → `bg-iga-copper`
- NEVER use `var()` in className: `bg-[var(--iga)]` → `bg-iga-copper`
- NEVER hardcode fonts: `font-serif` must resolve via `fontFamily` config
- ALWAYS extend theme in `tailwind.config.ts`, never override defaults blindly
