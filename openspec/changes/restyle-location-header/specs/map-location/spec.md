## ADDED Requirements

### Requirement: Location identity display
The system SHALL display the active map's `placeName` and `address` above the map embed and below any toggle pills. The display SHALL use distinct typography from the section title.

#### Scenario: Location shown above map
- **WHEN** the MapSection renders with one or more maps
- **THEN** the `placeName` SHALL appear between the pills (or section subtitle if pills absent) and the decorative top line above the map frame
- **THEN** the `address` SHALL appear directly below the `placeName`
- **THEN** both values SHALL update when the user toggles to a different map

### Requirement: Distinct typography for placeName
The `placeName` SHALL use `font-serif text-iga-copper font-bold italic` with a responsive font size via `clamp()`. This SHALL be visually distinct from the section title (`font-cinzel-regular text-iga-navy uppercase`).

#### Scenario: placeName renders in copper serif
- **WHEN** the MapSection renders with placeName "Centro de Eventos Destino Valparaíso"
- **THEN** the text SHALL appear in a serif font, copper color, bold italic style
- **THEN** the section title SHALL remain in cinzel-regular, navy, uppercase

### Requirement: Distinct typography for address
The `address` SHALL use `font-sans text-iga-foreground/60` at a smaller size. This SHALL visually subordinate the address to the placeName.

#### Scenario: address renders in muted sans-serif
- **WHEN** the MapSection renders with address "Calle Concepción 499"
- **THEN** the text SHALL appear in a sans-serif font at reduced opacity
- **THEN** it SHALL appear below the placeName with a small gap
