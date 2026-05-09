import type { ConventionData } from "./types";

export const convention: ConventionData = {
  year: 2026,
  title: "XI Convención Gnóstica Nacional",
  subtitle: "\"La sabiduría del Ser\"",
  date: "27 al 29 Junio 2026",
  location: "Valparaíso, V Región",

  contact: {
    phone: "+569 7818 3689",
    email: "zaczall@outlook.com",
    responsibleName: "Inscripciones",
  },

  aboutDescription: "Les invitamos fraternalmente a la XI Convención Nacional del Instituto Gnóstico de Antropología Chile a realizarse en la ciudad de Valparaíso, y que tendrá las bases en las enseñanzas de los Venerables Maestros Samael Aun Weor y Litelantes.",

  assets: {
    heroBackground: "/benediction-of-god-the-father.webp",
    videoPromo: "videos/promocion_iga_convencion_xi.mp4",
    gallery: [
      "images/gnosis/destino-valparaiso-fachada.webp",
      "images/gnosis/destino-valparaiso-patio-1.webp",
      "images/gnosis/destino_valparaiso_fachada_2.webp",
      "images/gnosis/destino_valparaiso_fachada_3.webp",
      "images/gnosis/destino_valparaiso_sala_conferencias_1.webp",
      "images/gnosis/destino_valparaiso_sala_conferencias_2.webp",
    ],
    galleryAttribution: "Imágenes de Destino Valparaíso - Museo del Inmigrante",
  },

  registration: {
    price: 160000,
    currency: "CLP",
    contact: {
      phone: "+569 7818 3689",
      email: "zaczall@outlook.com",
      responsibleName: "Jorge González & María Elena Monsalve",
    },
  },

  map: {
    lat: -33.042709,
    lng: -71.626906,
    zoom: 17,
    address: "Concepción 499, Valparaíso",
    placeName: "Destino Valparaíso - Museo del Inmigrante",
    instructions: "Cerro Alegre, Valparaíso. Acceso por Av. Alemania. Transporte público: ascensor Reina Victoria o bus local.",
    mapsUrl: "https://www.google.com/maps/place/Museo+del+Inmigrante/@-33.042709,-71.6294809,17z/data=!3m1!4b1!4m6!3m5!1s0x9689e1007a6a316d:0xbc8a9a2b7488e888!8m2!3d-33.042709!4d-71.626906!16s%2Fg%2F11yjnd8f2c?entry=ttu",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.01282974608785!2d-71.62703979994244!3d-33.04271568090795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e1006492457b%3A0x906a0894bb573641!2sDestino%20Valpara%C3%ADso%20-%20Museo%20del%20Inmigrante!5e0!3m2!1ses!2scl!4v1778344890593!5m2!1ses!2scl",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=-33.042709,-71.626906",
    viewMapUrl: "https://www.google.com/maps/place/Destino+Valpara%C3%ADso+-+Museo+del+Inmigrante/@-33.0427157,-71.6270398,19z/data=!4m6!3m5!1s0x9689e1006492457b:0x906a0894bb573641!8m2!3d-33.0427982!4d-71.6271754!16s%2Fg%2F11x7_zdgzt?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },

  lodgings: [
    {
      name: "Hotel Casa Higueras",
      address: "Cerro Alegre, Valparaíso",
      phone: "+56 32 1234 5678",
      distance: "300 m del espacio de encuentro",
      mapLink: "https://www.google.com/maps?q=Hotel+Casa+Higueras+Valparaiso",
    },
    {
      name: "Hostal Cerro Alegre",
      address: "Calle Urriola 450, Valparaíso",
      phone: "+56 32 2345 6789",
      distance: "500 m del espacio de encuentro",
      mapLink: "https://www.google.com/maps?q=Hostal+Cerro+Alegre+Valparaiso",
    },
    {
      name: "Hotel Da Vinci",
      address: "Calle Errázuriz 340, Valparaíso",
      phone: "+56 32 3456 7890",
      distance: "1.2 km del espacio de encuentro",
      mapLink: "https://www.google.com/maps?q=Hotel+Da+Vinci+Valparaiso",
    },
  ],

  sections: ["hero", "promotion", "registration", "gallery", "map", "lodging"] as const,
};
