'use client';

import { useRouter } from "next/navigation";
import { propertiesPuertoViejo } from "@/data/concepcion-del-uruguay/propertiesPuertoViejo"; //
import { Bed, Bath, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PropertiesTermas() {
    const router = useRouter();

    const handlePropertyClick = (id: number) => {
        window.open(`/selectHousePage?id=${id}`, '_blank');
    };

    return (
        <section className="py-12 bg-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
                    Zona termas
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {propertiesPuertoViejo.map((property) => (
                        <div
                            key={property.id}
                            className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={property.image}
                                alt={property.title}
                                width={600}
                                height={300}
                                className="w-full h-56 object-cover"
                                priority={property.id <= 3}

                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black">{property.title}</h3>
                                <p className="text-sm text-gray-600">📍{property.location}</p>
                                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Bed size={16} /> {property.bedrooms}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath size={16} /> {property.bathrooms}
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star size={16} fill="currentColor" /> {property.rating}
                                    </div>
                                </div>
                                <p className="text-blue-950 font-bold mt-2">${property.price} / noche</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <Button
                                    className="px-6 py-3"
                                    onClick={() => handlePropertyClick(property.id)}
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