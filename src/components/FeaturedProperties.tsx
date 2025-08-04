"use client";

import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { Bed, Bath, Star } from "lucide-react";

export default function FeaturedProperties() {
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/selectHousePage?id=${id}`);
    };

    return (
        <>
        <section className="py-12 bg-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Propiedades destacadas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handleClick(property.id)}
                            className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={property.image}
                                alt={property.title}
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
                                    onClick={() => handleClick(property.id)}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
