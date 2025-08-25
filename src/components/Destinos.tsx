"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Destino {
    nombre: string;
    bandera: string;
    imagen: string;
    ruta: string;
}

const destinos: Destino[] = [
    {
        nombre: "Buenos Aires",
        bandera: "🇦🇷",
        imagen: "/destinos/buenosaires.jpg",
        ruta: "/destinos/buenos-aires",
    },
    {
        nombre: "Mar del Plata",
        bandera: "🇦🇷",
        imagen: "/destinos/mardelplata.jpg",
        ruta: "/destinos/mar-del-plata",
    },
    {
        nombre: "San Carlos de Bariloche",
        bandera: "🇦🇷",
        imagen: "/destinos/bariloche.jpg",
        ruta: "/destinos/bariloche",
    },
    {
        nombre: "Córdoba",
        bandera: "🇦🇷",
        imagen: "/destinos/cordoba.jpg",
        ruta: "/destinos/cordoba",
    },
    {
        nombre: "Santiago",
        bandera: "🇨🇱",
        imagen: "/destinos/santiago.jpg",
        ruta: "/destinos/santiago",
    },
];

export default function Destinos() {
    return (
        <section className="px-4 py-8 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Destinos de moda</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {destinos.map((destino, i) => (
                    <Link key={i} href={destino.ruta}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                        >
                            <Image
                                src={destino.imagen}
                                alt={destino.nombre}
                                width={600}
                                height={400}
                                className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                                    {destino.nombre} <span>{destino.bandera}</span>
                                </h3>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
