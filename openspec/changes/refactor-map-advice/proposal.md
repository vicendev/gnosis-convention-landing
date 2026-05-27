## Why

El campo `advice` en `ConventionMap` actualmente es un string plano, lo que no permite controlar el énfasis visual ni el tamaño del aviso informativo. Se necesita una estructura más flexible que permita configurar si el texto va en bold, su tamaño relativo, y que el badge visual sea lo suficientemente notorio para funcionar como aviso.

## What Changes

- `advice` pasa de `string?` a `{ label: string; bold?: boolean; size?: "normal" | "large" }` opcional
- Se actualiza el badge visual en MapsSection eliminando el estilo cita actual (barra izquierda + serif italic) y reemplazándolo por un badge pill centrado con icono `lucide:info`
- Se adapta el JS de toggle para manejar el objeto en lugar del string plano
- Se usa `bold: true` y `size: "large"` para el aviso "Sólo Miembros de Segunda Cámara Activos"
- **BREAKING**: `advice` cambia de tipo — todos los usos de `advice` como string deben migrar a objeto

## Capabilities

### New Capabilities

- `map-advice-config`: Configuración tipada del aviso informativo en ubicaciones del mapa, con control de énfasis y tamaño visual

### Modified Capabilities

None.

## Impact

- `src/data/types.ts`: `ConventionMap.advice` cambia de `string?` a `{ label: string; bold?: boolean; size?: "normal" | "large" }`
- `src/data/convention.ts`: Segundo mapa actualiza `advice` a objeto con `bold: true`, `size: "large"`
- `src/components/sections/MapSection.astro`: Reemplazo del bloque cita por badge pill + actualización de `resolvedMaps` y JS switch
