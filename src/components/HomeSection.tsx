'use client';

import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { Bed, Bath, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturedProperties() {
    const router = useRouter();

    const zonas = [
        "Centro",
        "Puerto viejo",
        "Zona ciervo",
        "Zona remanso",
        "Villa Las Lomas",
        "Zona Rural/Termas",
    ];

    const handleZonaClick = (zona: string) => {
        router.push(`/zonas?zona=${encodeURIComponent(zona)}`);
    };

    const handlePropertyClick = (id: number) => {
        router.push(`/selectHousePage?id=${id}`);
    };

    return (
        <section
            className="py-12 bg-slate-200"
            style={{
                backgroundImage: "url('/images/imgcdu.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto px-4">
                {/* ZONAS */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-center mb-6 text-black">Seleccioná una zona</h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {zonas.map((zona) => (
                            <Button
                                key={zona}
                                onClick={() => handleZonaClick(zona)}
                                className="rounded-full text-sm sm:text-base px-4 py-2"
                                variant="secondary"
                            >
                                {zona}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* PROPIEDADES DESTACADAS */}
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Propiedades destacadas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handlePropertyClick(property.id)}
                            className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={property.image}
                                alt={property.title}
                                width={600}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black">{property.title}</h3>
                                <p className="text-sm text-gray-600">📍{property.location}</p>
                                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1"><Bed size={16} /> {property.bedrooms}</div>
                                    <div className="flex items-center gap-1"><Bath size={16} /> {property.bathrooms}</div>
                                    <div className="flex items-center gap-1 text-yellow-500"><Star size={16} fill="currentColor" /> {property.rating}</div>
                                </div>
                                <p className="text-blue-950 font-bold mt-2">${property.price} / noche</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <Button
                                    className="px-6 py-3"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePropertyClick(property.id);
                                    }}
                                >
                                    Ver más
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
