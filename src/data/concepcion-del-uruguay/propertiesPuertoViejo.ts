/**Representacion de una propiedad disponible para la zona de Puerto Viejo en la ciudad de Concepcion del Uruguay */

export interface Property {
    /**Identificador de la propiedad */
    id: number;
    /**Titulo de la propiedad */
    title: string;
    /**Locacion/zona de la propiedad */
    location: string;
    /**Precio del alquiler */
    price: string;
    /**Cantidad de habitaciones */
    bedrooms: number;
    /**Cantidad de baños */
    bathrooms: number;
    /**Puntaje de la propiedad */
    rating: number;
    /**Imagen de la propiedad */
    image: string;
    /**Codigo de numero telefonico del pais del propietario */
    codigo_pais: string;
    /**Telefono del propietario */
    telefono_dueno: string;
    /**Latitud ubicacion */
    lat: number;
    /**Longitud ubicacion */
    lng: number;
    /**URL opcional para mas informacion de la propiedad */
    url?: string;
}
/**
 * Lista de propiedades ubicadas en la zona de Puerto Viejo, Concepcion del Uruguay
 */
export const propertiesPuertoViejo: Property[] = [
    {
        id: 1,
        title: "Cabaña frente al río",
        location: "Puerto Viejo, Concepción del Uruguay",
        price: "30,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500201",
        lat: -32.482500,
        lng: -58.224000
    },
    {
        id: 2,
        title: "Casa con muelle privado",
        location: "Puerto Viejo",
        price: "70,000",
        bedrooms: 3,
        bathrooms: 2,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500202",
        lat: -32.481200,
        lng: -58.226500
    },
    {
        id: 3,
        title: "Loft moderno con vista al río",
        location: "Puerto Viejo",
        price: "40,000",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500203",
        lat: -32.483800,
        lng: -58.222900
    },
    {
        id: 4,
        title: "Bungalow rústico en la costa",
        location: "Puerto Viejo",
        price: "25,500",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500204",
        lat: -32.484200,
        lng: -58.225100
    },
    {
        id: 5,
        title: "Casa familiar cerca de la playa",
        location: "Puerto Viejo",
        price: "55,000",
        bedrooms: 4,
        bathrooms: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500205",
        lat: -32.480900,
        lng: -58.227700
    },
    {
        id: 6,
        title: "Departamento minimalista frente al río",
        location: "Puerto Viejo",
        price: "32,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500206",
        lat: -32.482700,
        lng: -58.223400
    },
];
