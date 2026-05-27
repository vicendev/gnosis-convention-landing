## ADDED Requirements

### Requirement: Advice field is an object with label, bold, and size
The system SHALL accept `advice` as an optional object `{ label: string; bold?: boolean; size?: "normal" | "large" }` instead of a plain string.

#### Scenario: Advice renders label text
- **WHEN** a map entry has `advice` with a `label`
- **THEN** the badge SHALL display the label text

#### Scenario: Advice label is bold when configured
- **WHEN** `advice.bold` is `true`
- **THEN** the label text SHALL render with `font-semibold`

#### Scenario: Advice label is normal weight by default
- **WHEN** `advice.bold` is `false` or omitted
- **THEN** the label text SHALL render with `font-normal`

#### Scenario: Advice pill uses normal size by default
- **WHEN** `advice.size` is `"normal"` or omitted
- **THEN** the badge SHALL use `text-sm sm:text-base`, `px-4 py-2`, icon `h-4 w-4`

#### Scenario: Advice pill uses large size when configured
- **WHEN** `advice.size` is `"large"`
- **THEN** the badge SHALL use `text-base sm:text-lg`, `px-5 py-2.5`, icon `h-5 w-5`

#### Scenario: Advice is hidden when null or absent
- **WHEN** a map entry has no `advice` field or `advice` is `null`
- **THEN** the badge SHALL be hidden (`display: none`)

### Requirement: Advice shows Iconify icon
The system SHALL display `lucide:info` icon inside the advice badge via `<Icon>` component.

#### Scenario: Icon renders inside badge
- **WHEN** the advice badge is visible
- **THEN** the `lucide:info` icon SHALL appear before the label text

### Requirement: Advice updates on map toggle
The system SHALL update the advice label text, bold state, and visibility when the user switches between map locations.

#### Scenario: Advice changes on toggle
- **WHEN** the user clicks a different map pill
- **THEN** the advice badge SHALL update to the new map's `advice` config
- **AND** the badge SHALL hide if the new map has no `advice`
