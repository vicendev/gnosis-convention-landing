---
name: convention-section
description: >
  Add a new section to the landing page playlist by creating a section component and registering it in convention.ts.
  Trigger: When adding, removing, or reordering sections of the landing page.
license: MIT
metadata:
  author: gnosis-convention-landing
  version: "1.0"
  scope: [src/components/sections, src/data]
  auto_invoke: "Adding, removing, or reordering landing page sections"
allowed-tools: Read, Edit, Write, Glob, Grep
---

## Steps

1. **Create section component** in `src/components/sections/{Name}Section.astro`
   - Define typed `Props` interface
   - Use `cn()` for classes
   - Follow fluid layout rules
   - Add animation classes if scroll-triggered

2. **Register in type union** (if using strict types)
   - Add section ID to `SectionId` type in `src/data/types.ts`

3. **Add to playlist** in `src/data/convention.ts`
   - Add section ID to `sections` array in desired order
   - Add corresponding data object if the section requires props

4. **Ensure section is rendered** in `src/pages/index.astro`
   - The playlist iteration should pick it up automatically

## Conventions
- Section filenames: `{Name}Section.astro` (PascalCase)
- Sections receive data via props, never import `convention.ts` directly
- Sections are presentational; data logic stays in `convention.ts`
- Removing a section = delete one line from the `sections` array
- Reordering = move the ID within the `sections` array
