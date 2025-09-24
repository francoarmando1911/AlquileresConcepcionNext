'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bed, Bath, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";
import { propertiesZonaTermas } from "@/data/concepcion-del-uruguay/propertiesZonaTermas";

const MapContainer = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function SelectHouseContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [property, setProperty] = useState<typeof propertiesZonaTermas[0] | null>(null);

    useEffect(() => {
        if (id) {
            const found = propertiesZonaTermas.find((p) => p.id === Number(id));
            setProperty(found || null);
        }
    }, [id]);

    if (!property) {
        return <div className="text-center py-20">Cargando propiedad...</div>;
    }

    const whatsappUrl = `https://wa.me/${property.codigo_pais}${property.telefono_dueno}?text=Hola,%20estoy%20interesado%20en%20la%20propiedad%20${property.id}`;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <Image
                src={property.image}
                alt={property.title}
                width={800}
                height={400}
                className="w-full max-h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 mb-2">📍 {property.location}</p>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2"><Bed size={20} /> {property.bedrooms} hab.</div>
                <div className="flex items-center gap-2"><Bath size={20} /> {property.bathrooms} baño/s</div>
                <div className="flex items-center gap-2 text-yellow-500"><Star size={20} fill="currentColor" /> {property.rating}</div>
            </div>
            <p className="text-2xl font-bold text-blue-600">${property.price} / noche</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaWhatsapp size={18} /> Contactar al dueño
                    </Button>
                </a>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-5">Ubicacion</h2>

            <MapContainer lat={property.lat} lng={property.lng} />
        </div>
    );
}

