'use client';

import { useSearchParams } from "next/navigation";
import { properties } from "@/data/properties";
import { useEffect, useState } from "react";
import { Bed, Bath, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function SelectHousePage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [property, setProperty] = useState<typeof properties[0] | null>(null);

    useEffect(() => {
        if (id) {
            const found = properties.find((p) => p.id === Number(id));
            setProperty(found || null);
        }
    }, [id]);

    if (!property) {
        return (
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <img src={property.image} alt={property.title} className="w-full max-h-96 object-cover rounded-lg mb-6" />
            <p className="text-gray-700 mb-2">📍 {property.location}</p>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2"><Bed size={20} /> {property.bedrooms} hab.</div>
                <div className="flex items-center gap-2"><Bath size={20} /> {property.bathrooms} baño/s</div>
                <div className="flex items-center gap-2 text-yellow-500"><Star size={20} fill="currentColor" /> {property.rating}</div>
            </div>
            <p className="text-2xl font-bold text-blue-600">${property.price} / noche</p>

            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button>
                    <a href="https://wa.me/{{propiedad.codigo_pais}}{{propiedad.telefono_dueno}}?text=Hola,%20estoy%20interesado%20en%20la%20propiedad%20{{propiedad.id}}"
                        target="_blank">
                        Contactar al dueño
                    </a>
                </Button>
            </div>
        </div>
    );
}
