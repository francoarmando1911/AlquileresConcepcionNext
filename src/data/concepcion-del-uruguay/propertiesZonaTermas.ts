/**Representacion de una propiedad disponible en zona termas en Concepcion del Uruguay */

export interface Property {
    /**Identificador de la propiedad */
    id: number;
    /**Titulo, descripcion de la propiedad */
    title: string;
    /**Locacion, barrio de la propiedad */
    location: string;
    /**Precio de alquiler mensual */
    price: string;
    /**Cantidad de habitaciones */
    bedrooms: number;
    /**Cantidad de baños */
    bathrooms: number;
    /**Rating de la propiedad */
    rating: number;
    /**Imagen de la propiedad */
    image: string;
    /**Codigo de numero telefonico especifico del pais del propietario */
    codigo_pais: string;
    /**Numero de telefono del propietario */
    telefono_dueno: string;
    /**Latitud ubicacion */
    lat: number;
    /**Longitud ubicacion */
    lng: number;
    /**URL opcional para informacion adicional */
    url?: string;
}

/**Lista de propiedades ubicadas en zona termas Concepcion del Uruguay */
export const propertiesZonaTermas: Property[] = [
    {
        id: 1,
        title: "Cabaña con acceso a las termas",
        location: "Zona Termas, Concepción del Uruguay",
        price: "42,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500401",
        lat: -32.500200,
        lng: -58.220800
    },
    {
        id: 2,
        title: "Casa moderna con quincho",
        location: "Zona Termas",
        price: "68,000",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500402",
        lat: -32.502300,
        lng: -58.223100
    },
    {
        id: 3,
        title: "Bungalow familiar con jardín",
        location: "Zona Termas",
        price: "55,500",
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500403",
        lat: -32.501400,
        lng: -58.224500
    },
    {
        id: 4,
        title: "Dúplex minimalista",
        location: "Zona Termas",
        price: "38,000",
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500404",
        lat: -32.499700,
        lng: -58.221900
    },
    {
        id: 5,
        title: "Casa amplia con pileta climatizada",
        location: "Zona Termas",
        price: "85,000",
        bedrooms: 4,
        bathrooms: 3,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500405",
        lat: -32.503100,
        lng: -58.225200
    },
    {
        id: 6,
        title: "Cabaña rústica con parrilla",
        location: "Zona Termas",
        price: "29,500",
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070",
        codigo_pais: "54",
        telefono_dueno: "3446500406",
        lat: -32.498800,
        lng: -58.222300
    },
];
