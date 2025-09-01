'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow-md sticky top-0 z-50" style={{ backgroundColor: "#fbfbeb" }}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <Link href="/">
                    <Image
                        src="/images/logo-actualizado.png"
                        alt="Alquileres Concepción"
                        width={160}
                        height={110}
                        priority
                        className="w-auto h-28"
                    />

                </Link>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-500">
                        Inicio
                    </Link>
                    <Link href="/alojamientos" className="text-gray-700 hover:text-blue-500">
                        Alojamiento
                    </Link>
                    <Link href="/contactPage" className="text-gray-700 hover:text-blue-500">
                        Contacto
                    </Link>
                </nav>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden px-4 pb-4 space-y-2 origin-top"
                    >
                        <Link href="/" className="block text-gray-700 hover:text-blue-500">
                            Inicio
                        </Link>
                        <Link href="/destinos" className="block text-gray-700 hover:text-blue-500">
                            Alojamiento
                        </Link>
                        <Link href="/contactPage" className="block text-gray-700 hover:text-blue-500">
                            Contacto
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
