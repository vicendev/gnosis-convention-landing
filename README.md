# XI Convención Gnóstica Nacional — Landing Page

Landing page estática para las convenciones del Instituto Gnóstico de Antropología (IGA) Chile.
Reutilizable cada dos años editando un único archivo de configuración.

## Stack

| Herramienta | Uso |
|-------------|-----|
| [Astro](https://astro.build) | Static Site Generator |
| TypeScript | Lenguaje |
| Tailwind CSS v4 | Estilos |
| @fontsource/merriweather, inter, cinzel, spectral | Fuentes locales |
| astro-icon + Lucide | Iconos SVG |
| Leaflet + OpenStreetMap | Mapas (sin API key) |
| Cloudflare R2 | Assets (video, fotos) |

## Arquitectura

```
src/
├── components/
│   ├── primitives/       # Atoms: Button, Card, Container, SectionTitle
│   ├── sections/         # Bloques: Hero, About, Gallery, Map, Lodging, Registration
│   └── Navigation.astro  # Menú sticky (mobile + desktop)
├── data/
│   ├── convention.ts     # Única fuente de verdad (editar aquí)
│   └── types.ts          # Interfaces TypeScript
├── layouts/
│   └── MainLayout.astro  # Shell HTML, meta tags, fonts
├── pages/
│   └── index.astro       # Ensambla secciones desde convention.ts
├── lib/
│   ├── utils.ts          # cn() helper
│   └── animate-on-scroll.ts  # IntersectionObserver
└── styles/
    ├── global.css        # Tema Tailwind, smooth scroll
    └── animations.css    # Fade-up, fade-in, stagger
```

### Principios

- **Tres capas**: Primitives (sin lógica) → Sections (presentacionales) → Layouts (shell HTML)
- **Playlist pattern**: `index.astro` itera `convention.sections` y renderiza en orden
- **Single source of truth**: Todo el contenido configurable vive en `src/data/convention.ts`
- **Fuentes locales**: sin Google Fonts en runtime
- **Sin API keys**: Leaflet/OSM para mapa, Google Maps embed opcional

## Cómo usar

### Requisitos

- Node.js >= 18
- pnpm (recomendado) o npm

### Instalar

```bash
pnpm install
```

### Desarrollo

```bash
pnpm run dev
```

Abre `http://localhost:4321`

### Build

```bash
pnpm run build
```

Genera los archivos estáticos en `dist/`.

### Vista previa del build

```bash
pnpm run preview
```

## Personalizar para una nueva convención

Editar `src/data/convention.ts`:

- Título, fecha, ubicación
- Contacto (teléfono, email)
- Texto de descripción
- URLs de assets (hero background, video, fotos de galería)
- Precio y datos de inscripción
- Coordenadas del mapa
- Lista de alojamientos
- Orden de secciones

## Estructura de assets en Cloudflare R2 (ejemplo)

```
images/gnosis/
├── destino-valparaiso-fachada.webp
├── destino-valparaiso-patio-1.webp
├── destino_valparaiso_fachada_2.webp
├── destino_valparaiso_fachada_3.webp
├── destino_valparaiso_sala_conferencias_1.webp
├── destino_valparaiso_sala_conferencias_2.webp
└── video_promocion_splash.webp

videos/
└── promocion_iga_convencion_xi.mp4
```
