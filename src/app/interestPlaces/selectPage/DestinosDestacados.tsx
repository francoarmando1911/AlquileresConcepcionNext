"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Destino {
    nombre: string;
    imagen: string;
    ruta: string;
}

const destinos: Destino[] = [
    {
        nombre: "Concepción del Uruguay",
        imagen: "/images/cdelu2.png",
        ruta: "/interestPlaces/concepcion-del-uruguay",
    },
    {
        nombre: "Gualeguaychú",
        imagen: "/images/gualeguaychu.png",
        ruta: "/destinos/gualeguaychu",
    },
    {
        nombre: "Concordia",
        imagen: "/images/concordia.png",
        ruta: "/destinos/concordia",
    },
    {
        nombre: "Federación",
        imagen: "/images/federacion.png",
        ruta: "/destinos/federacion",
    },
    {
        nombre: "Paraná",
        imagen: "/images/parana.png",
        ruta: "/destinos/parana",
    },
];

export default function DestinosDestacados() {
    return (
        <section className="px-4 py-12 max-w-6xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-black">
                    Lugares de interés
                </h1>
                <p className="text-gray-600 mt-2">
                    Selecciona un destino y explorá más sobre él
                </p>
            </div>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {destinos.map((destino, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href={destino.ruta}>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
                                <Image
                                    src={destino.imagen}
                                    alt={destino.nombre}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <h3 className="text-white text-xl font-semibold">
                                        {destino.nombre}
                                    </h3>
                                </div>
                                {/* Gradient inferior */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-medium text-lg">
                                        {destino.nombre}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
