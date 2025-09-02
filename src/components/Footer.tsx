import Link from "next/link";

export default function Footer() {
    const pages = [
        { name: "Inicio", href: "/" },
        { name: "Destinos", href: "/destinos" },
        { name: "Propiedades", href: "/propiedades" },
        { name: "Contacto", href: "/contacto" },
        { name: "Nosotros", href: "/nosotros" },
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "https://linkedin.com", target: "_blank" },
        { name: "Instagram", href: "https://instagram.com", target: "_blank" },
        { name: "Facebook", href: "https://facebook.com", target: "_blank" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo / Branding */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold mb-2">Alquileres Concepción</h2>
                    <p className="text-gray-400 text-sm">
                        Intra Software. Todos los derechos reservados &copy; {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="font-semibold mb-2">Navegación</h3>
                    <ul className="space-y-1">
                        {pages.map((page) => (
                            <li key={page.name}>
                                <Link href={page.href} className="hover:text-gray-400">
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <h3 className="font-semibold mb-2">Síguenos</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.target}
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Alquileres Concepción. Todos los derechos reservados.
            </div>
        </footer>
    );
}
