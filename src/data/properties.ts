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
}

export const properties: Property[] = [
    {
        id: 1,
        title: "Moderno departamento en el centro",
        location: "Centro, Concepción del Uruguay",
        price: "25,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500001",
        lat: -32.482758,
        lng: -58.237804
    },
    {
        id: 2,
        title: "Casa con pileta y jardín amplio",
        location: "Barrio Residencial, Concepción del Uruguay",
        price: "45,000",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974",
        codigo_pais: "54",
        telefono_dueno: "3446500002",
        lat: -32.490000,
        lng: -58.230000
    },
    {
        id: 3,
        title: "Loft acogedor cerca del río",
        location: "Costanera, Concepción del Uruguay",
        price: "20,000",
        bedrooms: 1,
        bathrooms: 1,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500003",
        lat: -32.480500,
        lng: -58.239000
    },
    {
        id: 4,
        title: "Casa familiar de dos plantas",
        location: "Barrio San Isidro",
        price: "38,000",
        bedrooms: 4,
        bathrooms: 3,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500004",
        lat: -32.478000,
        lng: -58.242000
    },
    {
        id: 5,
        title: "Cabaña rústica en zona tranquila",
        location: "Periferia de Concepción del Uruguay",
        price: "18,500",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500005",
        lat: -32.495000,
        lng: -58.225000
    },
    {
        id: 6,
        title: "Departamento luminoso con balcón",
        location: "Microcentro",
        price: "30,000",
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a07f944c7?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500006",
        lat: -32.483500,
        lng: -58.235500
    }
];
