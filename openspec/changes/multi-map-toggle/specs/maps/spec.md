## ADDED Requirements

### Requirement: Multiple maps support
The system SHALL support one or more map locations configured via `ConventionData.map` array. Each entry SHALL contain all fields required to render a full map card (embed, address, instructions, action URLs, optional directions video). When only one entry exists, the section SHALL render identically to the current single-map behavior.

#### Scenario: Single map configured
- **WHEN** `convention.map` array contains exactly one entry
- **THEN** the MapSection SHALL render the full map card with decorative frame
- **THEN** no toggle pills SHALL appear
- **THEN** the embed, address, instructions, action buttons SHALL display data from the sole entry

#### Scenario: Multiple maps configured
- **WHEN** `convention.map` array contains two or more entries
- **THEN** the MapSection SHALL render toggle pills above the map embed
- **THEN** each pill SHALL display the `label` of one map entry
- **THEN** the first entry SHALL be active by default
- **THEN** clicking a different pill SHALL switch the embed, address text, instructions, action URLs, and optional video to the selected entry
- **THEN** the active pill SHALL have a distinct visual style from inactive pills

### Requirement: Map entry label
Each `ConventionMap` entry SHALL include a `label` field used as display text in the toggle pill. Labels SHALL be short plain text strings (no HTML, no icons).

#### Scenario: Label used in toggle pill
- **WHEN** a map entry has `label: "Centro de Conferencias"`
- **THEN** the toggle pill for that entry SHALL display the text "Centro de Conferencias"

### Requirement: Dynamic content switching
When the user activates a different map via toggle, the following content SHALL update atomically:
- Embed iframe `src` SHALL change to the new entry's `embedUrl`
- Address text (`placeName · address`) SHALL update to the new entry's values
- Instructions text SHALL update to the new entry's `instructions`
- "Cómo llegar" button href SHALL update to the new entry's `directionsUrl`
- "Ver mapa completo" button href SHALL update to the new entry's `viewMapUrl`
- If the new entry has `directionsVideoUrl`, the video section SHALL appear and the `<video>` src SHALL update
- If the new entry lacks `directionsVideoUrl`, the video section SHALL be hidden

#### Scenario: Switching between maps
- **WHEN** user clicks pill for map entry at index 1
- **THEN** the embed iframe SHALL load the entry's embedUrl
- **THEN** address and instructions text SHALL reflect the entry's data
- **THEN** action button URLs SHALL point to the entry's directionsUrl and viewMapUrl

#### Scenario: Map with directions video switches to map without
- **WHEN** active map has `directionsVideoUrl` and user toggles to a map that does not
- **THEN** the directions video section SHALL be hidden (display: none)
- **THEN** the layout SHALL NOT reflow or shift

### Requirement: Embed loading feedback
When the embed iframe changes source, a loading spinner SHALL be visible until the new iframe finishes loading. A fallback timeout SHALL hide the spinner after 5 seconds regardless.

#### Scenario: Embed loading spinner on toggle
- **WHEN** user activates a different map
- **THEN** a loading spinner SHALL appear over the embed area
- **THEN** the spinner SHALL disappear when the new iframe fires its `onload` event
- **THEN** the spinner SHALL disappear after 5 seconds even if onload never fires

### Requirement: Generic section subtitle
The section subtitle (`sectionsConfig.map.subtitle`) SHALL be a generic string not tied to any specific map location. Map-specific location text (`placeName · address`) SHALL appear directly below the embed and SHALL update on toggle.

#### Scenario: Section subtitle is generic
- **WHEN** the MapSection renders
- **THEN** the `<SectionTitle>` SHALL display the value from `sectionsConfig.map.subtitle`
- **THEN** below the embed, a text element SHALL display the active map's `placeName · address`
