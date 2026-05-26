## ADDED Requirements

### Requirement: Segmented control container
The toggle pills SHALL be wrapped inside a visually distinct container that signals them as a group of mutually exclusive options.

The container SHALL have a subtle background (`bg-iga-copper/5`), a visible border (`border-iga-copper/30`), and rounded corners (`rounded-xl`). The container SHALL use flex layout with `gap` (not margin) between children.

#### Scenario: Container renders with two pills
- **WHEN** the map section has 2 or more locations configured in `convention.ts`
- **THEN** the pills render inside a container with distinct background and border
- **AND** the container uses `flex-wrap` for responsive stacking

#### Scenario: Single map hides pills
- **WHEN** the map section has only 1 location
- **AND** `hasMultiple` is false
- **THEN** no container or pills are rendered (unchanged existing behavior)

### Requirement: Map-pin icon on each toggle pill
Each pill SHALL display the `map-pin` Lucide icon before the label text, using the existing `astro-icon` system with `<svg>` output.

The icon SHALL be `aria-hidden="true"` (decorative, not informational) and sized relative to the text using `w-em` / `h-em`.

#### Scenario: Pills render with map-pin icon
- **WHEN** a toggle pill renders
- **THEN** it contains a `map-pin` icon element before the label text
- **AND** the icon has `aria-hidden="true"`

### Requirement: Active/inactive state contrast
The active pill SHALL use solid `bg-iga-copper` background with `text-white` and `shadow-md`.

The inactive pill SHALL use a semi-transparent background (`bg-iga-background/80` or similar) with full-opacity text and a subtle border. The inactive pill MUST NOT use `text-iga-foreground/70` (which makes it look disabled).

Both states SHALL use the same `rounded-lg`, `px-6`, `py-2.5` shape so the active pill can transition smoothly when clicked.

#### Scenario: Active pill has solid copper bg
- **WHEN** a pill is active (`data-active="true"`)
- **THEN** its background is `bg-iga-copper` and text is white

#### Scenario: Inactive pill has visible background
- **WHEN** a pill is inactive (`data-active="false"`)
- **THEN** its background is not fully transparent
- **AND** the text color is at full opacity (not `/70`)

### Requirement: One-time breath-pulse animation
The inactive pill SHALL receive a one-time "breath pulse" animation when the map section scrolls into view for the first time in the page session.

The animation SHALL oscillate opacity and box-shadow (`0 0 8px rgba(iga-copper)`) over 1.5 seconds, then stop. After execution, the animation class SHALL be removed so it never repeats.

#### Scenario: Pulse fires on first scroll
- **WHEN** the user scrolls to the map section for the first time
- **THEN** the inactive pill plays a breath-pulse animation over 1.5s
- **AND** the animation does not repeat on subsequent scrolls

#### Scenario: No pulse on single map
- **WHEN** the map section has only 1 location
- **THEN** no animation plays (no pills render)

### Requirement: Responsive layout
The toggle container SHALL use `flex-wrap` so pills stack vertically on narrow viewports. Each pill SHALL have `min-h-[44px]` for touch target accessibility.

No hardcoded static widths SHALL be used. The container SHALL be centered with `justify-center`.

#### Scenario: Stacked on narrow mobile
- **WHEN** viewport width is less than the combined width of both pills
- **THEN** pills wrap to a vertical stack
- **AND** each pill maintains `min-h-[44px]` touch target
