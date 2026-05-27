## Why

El sitio de la XI Convención Gnóstica Nacional no tiene una sección dedicada al programa de actividades. Los asistentes necesitan acceder al PDF del programa oficial desde la landing page — ya sea para verlo en el navegador o descargarlo a su dispositivo. Esta sección cierra esa brecha de información crítica usando la misma URL base de Cloudflare R2 que ya usamos para los demás assets.

## What Changes

- Nueva sección `ProgramSection` insertada entre `promotion` y `registration` en el playlist
- Nuevo field `programPdf` en `ConventionAssets` para la URL del PDF
- Nueva entrada `program` en `SectionsConfig` con título y subtítulo
- El PDF se abre en pestaña nueva (`target="_blank"`) — el navegador lo renderiza nativamente y el usuario puede descargar desde ahí
- Estilo visual consistente con el resto del sitio (paleta IGA, iconos Lucide, frame decorativo, animaciones scroll)

## Capabilities

### New Capabilities
- `program-section`: Sección de programa con descarga/visualización de PDF oficial de la convención, configurable vía convention.ts

### Modified Capabilities

None.

## Impact

- `src/data/types.ts`: Se agrega `"program"` a `SectionId`, `programPdf` a `ConventionAssets`, `program` a `SectionsConfig`
- `src/data/convention.ts`: Se agrega URL del PDF, config de título/subtítulo, y `"program"` al array `sections`
- `src/pages/index.astro`: Se importa y renderiza `ProgramSection`
- `src/components/sections/ProgramSection.astro`: Nueva sección (único archivo nuevo)
- `src/config/env.ts`: Sin cambios — reusa `ASSET_BASE_URL` existente
- Cloudflare R2: Se debe subir el PDF a `pdfs/gnosis/programa_xi_convencion.pdf`
