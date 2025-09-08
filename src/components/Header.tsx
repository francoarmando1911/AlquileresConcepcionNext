'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from '@/components/auth/AuthModal';

interface User {
    _id: string;
    nombre: string;
    email: string;
    telefono?: string;
    role: string;
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    /** Este useEffect verifica si hay usuarios logueados al cargar */
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        window.location.reload();
    };

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

                <div className="flex items-center space-x-4">
                    
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
                </div>

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
                    <div className="hidden md:flex space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Hola, {user.nombre}</span>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-700 hover:text-red-500"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsAuthModalOpen(true)}
                                className="text-gray-700 hover:text-blue-500"
                            >
                                Iniciar Sesión
                            </button>
                        )}
                    </div>
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
                        style={{ backgroundColor: "#fbfbeb" }}
                    >
                        <Link
                            href="/"
                            className="block text-gray-700 hover:text-blue-500 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/destinos"
                            className="block text-gray-700 hover:text-blue-500 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Alojamiento
                        </Link>
                        <Link
                            href="/contactPage"
                            className="block text-gray-700 hover:text-blue-500 py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contacto
                        </Link>

                        {/* Botón de Login/Logout en mobile */}
                        <div className="border-t border-gray-200 pt-2 mt-2">
                            {user ? (
                                <div className="space-y-2">
                                    <div className="text-gray-700 py-2">
                                        Hola, {user.nombre}
                                    </div>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setMenuOpen(false);
                                        }}
                                        className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        setIsAuthModalOpen(true);
                                        setMenuOpen(false);
                                    }}
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Iniciar Sesión
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </header>
    );
}