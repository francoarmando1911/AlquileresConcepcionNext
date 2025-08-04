'use client';

import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { Bed, Bath, Star } from "lucide-react";
import Image from "next/image";

export default function FeaturedProperties() {
    const router = useRouter();

    const zonas = [
        "Centro",
        "Costanera",
        "Barrio Residencial",
        "San Isidro",
        "Villa Las Lomas",
        "Zona Rural",
    ];

    const handleZonaClick = (zona: string) => {
        router.push(`/zonas?zona=${encodeURIComponent(zona)}`);
    };

    const handlePropertyClick = (id: number) => {
        router.push(`/selectHousePage?id=${id}`);
    };

    return (
        <section className="py-12 bg-slate-200">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-center mb-6 text-black">Seleccioná una zona</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {zonas.map((zona) => (
                            <button
                                key={zona}
                                onClick={() => handleZonaClick(zona)}
                                className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                            >
                                {zona}
                            </button>
                        ))}
                    </div>
                </div>

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
                                <button
                                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePropertyClick(property.id);
                                    }}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
