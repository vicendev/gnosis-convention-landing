## ADDED Requirements

### Requirement: Section is rendered in playlist order
The system SHALL render the program section between the promotion section and the registration section in the landing page playlist.

#### Scenario: Section appears at correct position
- **WHEN** the landing page is loaded
- **THEN** the program section SHALL appear after the video promotion section and before the registration section

### Requirement: Program PDF URL is configurable
The system SHALL accept a `programPdf` string in `ConventionAssets` pointing to the PDF file path relative to `ASSET_BASE_URL`.

#### Scenario: PDF loads from configured URL
- **WHEN** the user clicks the "Ver Programa" button
- **THEN** the browser SHALL open `{ASSET_BASE_URL}{programPdf}` in a new tab

### Requirement: Section displays configured title and subtitle
The system SHALL display a title and subtitle for the program section, sourced from `SectionsConfig.program`.

#### Scenario: Title and subtitle render correctly
- **WHEN** the program section is rendered
- **THEN** the section title SHALL display "Programa Convención" (or the configured value)
- **AND** the subtitle SHALL display the CTA text (or the configured value)

### Requirement: Program section has visual consistency
The system SHALL use the same visual patterns as existing sections: IGA theme tokens, Lucide icons, decorative framing, and scroll-triggered animation.

#### Scenario: Visual elements are present
- **WHEN** the program section is rendered
- **THEN** it SHALL use the `Container` and `SectionTitle` primitives
- **AND** it SHALL include the `animate-fade-up animate-on-scroll` animation classes
- **AND** it SHALL use colors from the IGA theme (`iga-copper`, `iga-gold`, `iga-forest`, `iga-navy`)

### Requirement: PDF link uses target="_blank"
The system SHALL open the PDF in a new browser tab via `target="_blank"` with `rel="noopener noreferrer"`.

#### Scenario: Link opens in new tab
- **WHEN** the user clicks the program button
- **THEN** a new browser tab SHALL open with the PDF URL
- **AND** the link SHALL have `rel="noopener noreferrer"` for security

### Requirement: ID attribute for navigation
The system SHALL set `id="program"` on the section element for anchor navigation.

#### Scenario: Section has correct ID
- **WHEN** the program section is rendered
- **THEN** the `<section>` element SHALL have `id="program"`
