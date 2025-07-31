"use client";

import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { Bed, Bath, Star } from "lucide-react";
import Link from "next/link";

export default function FeaturedProperties() {
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/selectHousePage?id=${id}`);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Propiedades destacadas</h2>
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
                                <h3 className="text-lg font-semibold">{property.title}</h3>
                                <p className="text-sm text-gray-600">{property.location}</p>
                                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1"><Bed size={16} /> {property.bedrooms}</div>
                                    <div className="flex items-center gap-1"><Bath size={16} /> {property.bathrooms}</div>
                                    <div className="flex items-center gap-1 text-yellow-500"><Star size={16} fill="currentColor" /> {property.rating}</div>
                                </div>
                                <p className="text-blue-600 font-bold mt-2">${property.price}</p>
                            </div>
                            <Link href={`/selectHousePage?id=${property.id}`}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                                    Ver más
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
