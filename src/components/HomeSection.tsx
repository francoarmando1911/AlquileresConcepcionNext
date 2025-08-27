"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { Bed, Bath, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedProperties() {
    const router = useRouter();
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const handleClick = (id: number) => router.push(`/selectHousePage?id=${id}`);

    const updateEdges = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const { scrollLeft, clientWidth, scrollWidth } = el;
        setAtStart(scrollLeft <= 0);
        setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
    };

    const scrollByViewport = (dir: "left" | "right") => {
        const el = scrollerRef.current;
        if (!el) return;
        const amount = Math.round(el.clientWidth * 0.9);
        el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        updateEdges();
        const onScroll = () => updateEdges();
        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateEdges);
        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateEdges);
        };
    }, []);

    return (
        <section className="py-12 bg-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
                    Propiedades destacadas
                </h2>

                <div className="relative">
                    {!atStart && (
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-slate-200 to-transparent rounded-l-xl" />
                    )}
                    {!atEnd && (
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-slate-200 to-transparent rounded-r-xl" />
                    )}

                    {/* Botón Izquierdo */}
                    <motion.button
                        whileHover={{ scale: atStart ? 1 : 1.05 }}
                        whileTap={{ scale: atStart ? 1 : 0.98 }}
                        onClick={() => scrollByViewport("left")}
                        aria-label="Anterior"
                        disabled={atStart}
                        className={`absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 md:p-3 shadow-lg backdrop-blur bg-white/80 hover:bg-white transition
              ${atStart ? "opacity-40 cursor-not-allowed" : "opacity-100"}`}
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.button>

                    {/* Botón Derecho */}
                    <motion.button
                        whileHover={{ scale: atEnd ? 1 : 1.05 }}
                        whileTap={{ scale: atEnd ? 1 : 0.98 }}
                        onClick={() => scrollByViewport("right")}
                        aria-label="Siguiente"
                        disabled={atEnd}
                        className={`absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 md:p-3 shadow-lg backdrop-blur bg-white/80 hover:bg-white transition
              ${atEnd ? "opacity-40 cursor-not-allowed" : "opacity-100"}`}
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.button>

                    <motion.div
                        ref={scrollerRef}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
                    >
                        {properties.map((property, i) => (
                            <motion.div
                                key={property.id}
                                whileHover={{ y: -4 }}
                                className="snap-start flex-shrink-0 w-[270px] sm:w-[320px] md:w-[360px] bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition cursor-pointer"
                                onClick={() => handleClick(property.id)}
                            >
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-52 md:h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-black line-clamp-1">
                                        {property.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-1">📍 {property.location}</p>

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

                                    <p className="text-blue-950 font-bold mt-2">
                                        ${property.price} / noche
                                    </p>
                                </div>

                                <div className="flex justify-center pb-5">
                                    <button
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-[0.98] transition"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClick(property.id);
                                        }}
                                    >
                                        Ver más
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
}
