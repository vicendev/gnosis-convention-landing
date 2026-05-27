## 1. Type & Data Update

- [x] 1.1 Change `ConventionMap.advice` type from `string?` to `{ label: string; bold?: boolean; size?: "normal" | "large" }` in `src/data/types.ts`
- [x] 1.2 Update second map entry in `src/data/convention.ts` to use object: `advice: { label: "Sólo Miembros de Segunda Cámara Activos", bold: true, size: "large" }`

## 2. Component — MapSection Badge

- [x] 2.1 Replace the current quote-style advice block with a centered badge pill using `lucide:info` icon
- [x] 2.2 Update `resolvedMaps` mapping to pass `advice` object through
- [x] 2.3 Update JS `switchMap` to read `data.advice.label`, `data.advice.bold`, and toggle visibility
