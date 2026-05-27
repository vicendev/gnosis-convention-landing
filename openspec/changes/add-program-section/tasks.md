## 1. Data Layer — Types & Config

- [x] 1.1 Add `"program"` to `SectionId` union type in `src/data/types.ts`
- [x] 1.2 Add `programPdf: string` to `ConventionAssets` interface
- [x] 1.3 Add `program: { title: string; subtitle: string }` to `SectionsConfig` interface
- [x] 1.4 Add `programPdf` field to `convention.assets` in `src/data/convention.ts` with value `"pdfs/gnosis/programa_xi_convencion.pdf"`
- [x] 1.5 Add `program` config entry to `convention.sectionsConfig` with title `"Programa Convención"` and subtitle `"Descarga el programa completo de la XI Convención"`
- [x] 1.6 Insert `"program"` into the `convention.sections` array between `"promotion"` and `"registration"`

## 2. Component — ProgramSection

- [x] 2.1 Create `src/components/sections/ProgramSection.astro` with typed Props: `programPdf`, `sectionTitle`, `sectionSubtitle`, `class?`
- [x] 2.2 Import `Container`, `SectionTitle`, `cn()`, `Icon`, and `ASSET_BASE_URL`
- [x] 2.3 Build the section shell with `id="program"`, `animate-fade-up animate-on-scroll`, and `py-16 md:py-24`
- [x] 2.4 Add decorative frame matching PromotionSection (gradient glow border, corner ornaments)
- [x] 2.5 Add CTA button: `<a href target="_blank" rel="noopener noreferrer">` with `lucide:file-text` icon, solid `iga-copper` styling
- [x] 2.6 Add `initAnimateOnScroll` script block

## 3. Routing — Index Page

- [x] 3.1 Import `ProgramSection` in `src/pages/index.astro`
- [x] 3.2 Add `sectionId === "program"` case in the playlist map, passing `convention.assets.programPdf`, `convention.sectionsConfig.program.title`, and `convention.sectionsConfig.program.subtitle`
