// ─── Contact ───────────────────────────────────────────────
export interface ConventionContact {
  phone: string;
  email: string;
  responsibleName?: string;
}

// ─── Assets ────────────────────────────────────────────────
export interface ConventionAssets {
  heroBackground: string;
  videoPromo: string;
  gallery: string[];
  galleryAttribution?: string;
}

// ─── Bank Account ──────────────────────────────────────────
export interface ConventionBankAccount {
  accountType: string;
  accountNumber: string;
  bankName: string;
  accountHolder: string;
  /** RUT del titular — ej: "8.608.805-3" */
  rut?: string;
}

// ─── Registration ──────────────────────────────────────────
export interface ConventionRegistration {
  price: number;
  currency: string;
  /** Nota opcional sobre el valor — ej: "Valor se hace efectivo a partir de los 16 años en adelante" */
  ageNote?: string;
  /** Información de la cuenta bancaria para depósitos/transferencias */
  bankAccount?: ConventionBankAccount;
  contact: {
    phone: string;
    email: string;
    responsibleName: string;
  };
}

// ─── Map ───────────────────────────────────────────────────
export interface ConventionMap {
  label: string;
  address: string;
  placeName: string;
  lat: number;
  lng: number;
  zoom: number;
  instructions: string;
  mapsUrl?: string;
  embedUrl?: string;
  directionsUrl?: string;
  viewMapUrl?: string;
  /** URL opcional de un video mostrando cómo llegar al lugar */
  directionsVideoUrl?: string;
}

// ─── Lodging ───────────────────────────────────────────────
export interface ConventionLodging {
  name: string;
  address: string;
  phone: string;
  distance: string;
  mapLink: string;

  /** Tipo de baño — ej: "Baño privado", "Baño compartido" */
  bathroom?: string;
  /** Info de desayuno — ej: "Con desayuno", "Sin desayuno" */
  breakfast?: string;
  /** Email de contacto */
  email?: string;
  /** Persona de contacto en el alojamiento */
  contactPerson?: string;
  /** Texto descriptivo o de recomendación */
  description?: string;
  /** Ej: "15% descuento" */
  discount?: string;
  /** Palabra clave que se debe mencionar para obtener el descuento */
  discountKeyword?: string;
  /** URL para iframe embebido de Google Maps */
  mapEmbedUrl?: string;
}

// ─── Section Titles Config ─────────────────────────────────
export interface SectionsConfig {
  promotion: { title: string; subtitle: string };
  registration: { title: string; subtitle: string };
  gallery: { title: string };
  map: { title: string; subtitle?: string; directionsLabel?: string };
  lodging: { title: string; subtitle: string };
}

// ─── Section IDs (Playlist) ────────────────────────────────
export type SectionId = "hero" | "promotion" | "registration" | "gallery" | "map" | "lodging";

// ─── Main Convention Data ──────────────────────────────────
export interface ConventionData {
  year: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  contact: ConventionContact;
  aboutDescription: string;
  assets: ConventionAssets;
  registration: ConventionRegistration;
  map: ConventionMap[];
  lodgings: ConventionLodging[];
  sections: readonly SectionId[];
  sectionsConfig: SectionsConfig;
}
