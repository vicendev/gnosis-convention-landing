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

// ─── Registration ──────────────────────────────────────────
export interface ConventionRegistration {
  price: number;
  currency: string;
  contact: {
    phone: string;
    email: string;
    responsibleName: string;
  };
}

// ─── Map ───────────────────────────────────────────────────
export interface ConventionMap {
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  placeName: string;
  instructions: string;
  mapsUrl?: string;
  embedUrl?: string;
  directionsUrl?: string;
  viewMapUrl?: string;
}

// ─── Lodging ───────────────────────────────────────────────
export interface ConventionLodging {
  name: string;
  address: string;
  phone: string;
  distance: string;
  mapLink: string;
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
  map: ConventionMap;
  lodgings: ConventionLodging[];
  sections: readonly SectionId[];
}
