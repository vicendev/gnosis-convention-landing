## Context

The MapSection has two togglable locations (Centro de Conferencias, Punto de Encuentro). Currently the toggle pills look like disabled labels: transparent background, thin border, low-contrast text, no icons. On mobile there is no hover state to hint at interactivity. The action cards below (Cómo llegar, Ver mapa completo) have stronger visual weight, inverting the expected hierarchy.

This design covers the visual affordance improvements discussed and agreed with the stakeholder: a segmented container, map-pin icons, and a one-time breath-pulse animation on the inactive pill.

## Goals / Non-Goals

**Goals:**
- Make pills visually read as interactive (CTA-like) on first paint, before any hover/click
- Add a one-time "breath pulse" animation on the inactive pill when scrolled into view
- Keep the layout fully responsive (stack on mobile via flex-wrap)
- Match the IGA visual language (copper accents, serif elegance, no hardcoded sizes)
- Use existing project patterns (cn() utility, animations.css, Astro conventions)

**Non-Goals:**
- Changing the toggle logic (already fixed in a prior session)
- Adding new data fields to convention.ts
- Changing other sections or global layout
- Adding external dependencies or libraries

## Decisions

1. **Segmented container over standalone pills**
   - *Why*: Grouping both pills inside a shared frame (`bg-iga-copper/5 border border-iga-copper/30 rounded-xl`) signals "this is a unified control with mutually exclusive options." Standalone pills floating on the page background read as tags.
   - *Alternative considered*: Tabs with underline indicator — cleaner but less obviously clickable on mobile.

2. **Map-pin icon on every pill**
   - *Why*: Thematic connection to map content; gives the button visual substance. Uses the existing `map-pin` Lucide icon from astro-icon.
   - *Alternative considered*: No icons (text only) — saves space but doesn't improve affordance.

3. **Breath-pulse on inactive pill only**
   - *Why*: The active pill already reads as selected. The inactive one needs attention. Pulse is a subtle opacity + box-shadow oscillation (1.0→0.6→1.0) over 1.5s, triggered once via IntersectionObserver when the section scrolls into view.
   - *Alternative considered*: Shake/nudge — too aggressive for the IGA tone. Continuous pulse — annoying after the first glance.
   - *Implementation*: CSS `@keyframes` in `animations.css`, class `animate-attention` removed after first run via JS.

4. **Active state uses solid copper BG; inactive uses semi-transparent background inside container**
   - *Why*: Active needs maximum contrast as the current selection. Inactive with a subtle translucent bg (inside the container) still reads as part of the control, not as a disabled element.
   - *Why not full transparent*: Previously the inactive state blended into the page background, making it invisible as a control.

## Risks / Trade-offs

- **Animation not supported**: Some older browsers may not support the pulse keyframes → fallback is static display (still improved over current state). Mitigation: use `@keyframes` with standard syntax.
- **Screen reader confusion**: Icons are decorative (`aria-hidden="true"`), and the `data-active` attribute + `aria-pressed` should be used for accessibility.
- **Re-pulse on re-scroll**: Need a flag to ensure the animation fires only once. Mitigation: JS removes the class after first execution.
- **Container adds horizontal space**: On very narrow mobile (320px), two pills with icons may wrap. Acceptable — flex-wrap handles it gracefully.
