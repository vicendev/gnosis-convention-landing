## 1. Reposition and restyle location info

- [x] 1.1 Move `map-location-info` block from below decorative bottom line to above decorative top line (between pills and map frame)
- [x] 1.2 Update placeName styles: `font-serif text-iga-copper font-bold italic` with clamp font size
- [x] 1.3 Update address styles: `font-sans text-iga-foreground/60 text-sm`
- [x] 1.4 Ensure toggle JS still targets correct element IDs and updates text on pill click

## 2. Verification

- [x] 2.1 Run `astro build` and confirm no errors
- [ ] 2.2 Visually confirm location info appears above map and below pills
- [ ] 2.3 Confirm toggle updates location text correctly
