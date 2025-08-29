export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    rating: number;
    image: string;
    codigo_pais: string;
    telefono_dueno: string;
    lat: number;
    lng: number;
    url?: string;
}

export const propertiesZonaCiervo: Property[] = [
    {
        id: 1,
        title: "Casa de campo con piscina",
        location: "Zona Ciervo, Concepción del Uruguay",
        price: "65,000",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500301",
        lat: -32.495200,
        lng: -58.230500
    },
    {
        id: 2,
        title: "Cabaña rodeada de naturaleza",
        location: "Zona Ciervo",
        price: "28,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500302",
        lat: -32.496800,
        lng: -58.228700
    },
    {
        id: 3,
        title: "Chalet familiar amplio",
        location: "Zona Ciervo",
        price: "75,000",
        bedrooms: 4,
        bathrooms: 3,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500303",
        lat: -32.494000,
        lng: -58.232900
    },
    {
        id: 4,
        title: "Casa moderna con terraza",
        location: "Zona Ciervo",
        price: "55,500",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500304",
        lat: -32.493300,
        lng: -58.229800
    },
    {
        id: 5,
        title: "Quinta con parque arbolado",
        location: "Zona Ciervo",
        price: "82,000",
        bedrooms: 5,
        bathrooms: 3,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500305",
        lat: -32.497100,
        lng: -58.231400
    },
    {
        id: 6,
        title: "Dúplex estilo rústico",
        location: "Zona Ciervo",
        price: "36,000",
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500306",
        lat: -32.495800,
        lng: -58.227900
    },
];
