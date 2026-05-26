## 1. CSS — Breath-pulse animation

- [x] 1.1 Add `@keyframes breath-pulse` to `src/styles/animations.css`: opacity oscillation (1 → 0.6 → 1) + box-shadow glow (copper) over 1.5s
- [x] 1.2 Add `.animate-attention` utility class referencing the keyframes, with `animation-iteration-count: 1`

## 2. MapSection — Container and icons

- [x] 2.1 Wrap existing pills in a segmented container (`div` with `flex flex-wrap justify-center gap-3 p-1.5 rounded-xl border border-iga-copper/30 bg-iga-copper/5`)
- [x] 2.2 Add `map-pin` icon (from astro-icon / Lucide) before label text in each pill, with `aria-hidden="true"` and relative sizing
- [x] 2.3 Update inactive pill classes: replace `text-iga-foreground/70` with `text-iga-foreground`, add `bg-iga-background/60` for visible background. Keep the `hover:bg-iga-copper/10` interaction.

## 3. MapSection — One-time pulse trigger

- [x] 3.1 In `initMapToggle()`, after the container is detected, add an IntersectionObserver that applies `.animate-attention` to the inactive pill on first intersection, then disconnects the observer and removes the class after animation completes
- [x] 3.2 Ensure the pulse only fires when `hasMultiple` is true (pills exist) and there are 2+ maps

## 4. Verify

- [x] 4.1 Run `npm run build` and confirm zero errors
- [x] 4.2 Check `dist/index.html` for correct container, icons, and class output
- [x] 4.3 Spot-check the JS bundle for the observer/pulse logic
