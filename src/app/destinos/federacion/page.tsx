"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const zonas = [
    { nombre: 'ZONA n', ruta: '/destinos/' },
    { nombre: 'ZONA s', ruta: '/destinos/' },
    { nombre: 'ZONA e', ruta: '/destinos/' },
    { nombre: 'ZONA o', ruta: '/destinos/' },
];

export default function Federacion() {
    return (
        <div className="w-full min-h-screen relative">
            <div className="absolute inset-0">
                <Image
                    src="/images/federacion2.png"
                    alt="Federación"
                    fill
                    className="object-cover"
                    priority={true} 
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-4xl sm:text-6xl font-bold mb-8"
                >
                    Federación
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {zonas.map((zona) => (
                        <Link
                            key={zona.nombre}
                            href={zona.ruta}
                            className="px-5 py-3 rounded-lg font-semibold transition bg-white text-black hover:bg-blue-200"
                        >
                            {zona.nombre}
                        </Link>
                    ))}

                </motion.div>
            </div>
        </div>
    );
}
