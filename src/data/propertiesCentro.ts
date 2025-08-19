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

export const propertiesCentro: Property[] = [
    {
        id: 1,
        title: "Departamento luminoso con balcón",
        location: "Centro, Concepción del Uruguay",
        price: "28,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600607688964-c63acdcdfb0d?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500101",
        lat: -32.483100,
        lng: -58.236900
    },
    {
        id: 2,
        title: "Casa amplia con quincho y garaje",
        location: "Barrio San Isidro",
        price: "55,000",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1974",
        codigo_pais: "54",
        telefono_dueno: "3446500102",
        lat: -32.485200,
        lng: -58.240500
    },
    {
        id: 3,
        title: "Cabaña rústica en zona tranquila",
        location: "Barrio La Rural",
        price: "22,000",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500103",
        lat: -32.490000,
        lng: -58.230000
    },
    {
        id: 4,
        title: "Dúplex moderno con terraza",
        location: "Barrio 30 de Octubre",
        price: "35,000",
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817b6?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500104",
        lat: -32.481000,
        lng: -58.235000
    },
    {
        id: 5,
        title: "Departamento económico cerca de la universidad",
        location: "Zona UNER",
        price: "18,500",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1628744876497-649a4a2fdbef?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500105",
        lat: -32.487500,
        lng: -58.242000
    },
    {
        id: 6,
        title: "Casa con pileta y amplio jardín",
        location: "Barrio Santa Teresita",
        price: "65,000",
        bedrooms: 4,
        bathrooms: 3,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500106",
        lat: -32.489000,
        lng: -58.239500
    },
];
