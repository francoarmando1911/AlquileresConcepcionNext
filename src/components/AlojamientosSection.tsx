"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, CalendarDays } from "lucide-react";

export default function AlojamientosSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-slate-200">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg"
            >
                <Image
                    src="/images/gualeguaychu.png" 
                    alt="Alojamientos en Argentina"
                    width={1200}
                    height={600}
                    className="object-cover w-full h-[250px] md:h-[400px]"
                    priority
                    quality={75}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl text-center mt-8"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Descubrí alojamientos turisticos en Entre Ríos
                </h2>
                <p className="text-gray-600 mt-4 text-lg md:text-xl">
                    ¿Buscás un alojamiento para vos o para todo tu grupo? Seguro que en
                    nuestra plataforma encontrás lo que necesitás para tu próxima escapada.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                    <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Reservá con total confianza</h3>
                    <p className="text-gray-600">
                        Contacto directo con los propietarios
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                    <Users className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Descubrí más prestaciones</h3>
                    <p className="text-gray-600">
                        Decidí qué servicios no te pueden faltar en un alojamiento y filtrá tu
                        búsqueda para organizar la escapada perfecta.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                    <CalendarDays className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Apostá por la flexibilidad</h3>
                    <p className="text-gray-600">
                        Gracias a las estadías con cancelación flexible, es más fácil hacer una
                        nueva reserva si cambiás de planes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
