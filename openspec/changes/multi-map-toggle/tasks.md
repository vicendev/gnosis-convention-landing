## 1. Types

- [x] 1.1 Add `label: string` field to `ConventionMap` interface in `types.ts`
- [x] 1.2 Change `ConventionData.map` type from `ConventionMap` to `ConventionMap[]`

## 2. Data (convention.ts)

- [x] 2.1 Update existing map entry: add `label: "Centro de Conferencias"`, wrap in array
- [x] 2.2 Add second map entry with `label: "Punto de Encuentro"` and its coordinates, embed, directions
- [x] 2.3 Change `sectionsConfig.map.subtitle` to a generic string ("Puntos de encuentro del evento")

## 3. MapSection Component

- [x] 3.1 Update props to accept `ConventionMap[]` instead of `ConventionMap`
- [x] 3.2 Add toggle pills markup rendered only when `map.length > 1`
- [x] 3.3 Add dynamic location text (`placeName` + `address`) below the map embed
- [x] 3.4 Move embed URL, directions URL, viewMapURL, and instructions from static to data-derived
- [x] 3.5 Implement toggle JS: pill click → update iframe src, address text, instructions, action URLs
- [x] 3.6 Implement directions video toggle: show/hide + swap src based on active map
- [x] 3.7 Add loading spinner display on toggle with 5s fallback timeout
- [x] 3.8 Adjust single-map path to render identically to current behavior (no pills, no dynamic text)

## 4. Verification

- [x] 4.1 Run `astro build` and verify no type errors
- [ ] 4.2 Test single-map config renders without pills and matches current visual output
- [ ] 4.3 Test two-map config: toggle pills switch embed, text, and URLs
- [ ] 4.4 Test directions video shows/hides correctly based on active map
- [ ] 4.5 Test mobile layout: pills wrap gracefully on narrow screens
