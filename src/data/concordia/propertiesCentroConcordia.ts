/**
 * Representa una propiedad disponible para alquiler.
 */
export interface Property {
    /** Identificador único de la propiedad */
    id: number;
    /** Título o descripción breve de la propiedad */
    title: string;
    /** Ubicación de la propiedad (barrio, ciudad) */
    location: string;
    /** Precio de la propiedad en formato string (ej. "28,000") */
    price: string;
    /** Cantidad de dormitorios */
    bedrooms: number;
    /** Cantidad de baños */
    bathrooms: number;
    /** Calificación de la propiedad (escala 1 a 5) */
    rating: number;
    /** URL de la imagen principal de la propiedad */
    image: string;
    /** Código de país del propietario (ej. "54" para Argentina) */
    codigo_pais: string;
    /** Número de teléfono del dueño */
    telefono_dueno: string;
    /** Latitud de la ubicación */
    lat: number;
    /** Longitud de la ubicación */
    lng: number;
    /** URL opcional para más información o página de la propiedad */
    url?: string;
}

/**
 * Lista de propiedades ubicadas en el centro de Concordia.
 * Cada objeto cumple con la interfaz Property.
 */
export const propertiesCentroConcordia: Property[] = [
    {
        id: 1,
        title: "Departamento luminoso con balcón",
        location: "Centro, Concordia",
        price: "28,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500101",
        lat: -32.483100,
        lng: -58.236900
    },
    {
        id: 2,
        title: "Casa amplia con quincho y garaje",
        location: "Centro, Concordia",
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
        location: "Centro, Concordia",
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
        location: "Centro, Concordia",
        price: "35,000",
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500104",
        lat: -32.481000,
        lng: -58.235000
    },
    {
        id: 5,
        title: "Departamento económico cerca de la universidad",
        location: "Centro, Concordia",
        price: "18,500",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500105",
        lat: -32.487500,
        lng: -58.242000
    },
    {
        id: 6,
        title: "Casa con pileta y amplio jardín",
        location: "Centro, Concordia",
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
