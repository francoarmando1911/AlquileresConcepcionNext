import Link from "next/link";

export default function Footer() {
    const pages = [
        { name: "Inicio", href: "/" },
        { name: "Destinos", href: "/destinos" },
        { name: "Contacto", href: "/contactPage" },
        { name: "Concepción del Uruguay", href: "/destinos/concepcion-del-uruguay" },
        { name: "Concordia", href: "/destinos/concordia" },
        { name: "Federación", href: "/destinos/federacion" },
        { name: "Gualeguaychú", href: "/destinos/gualeguaychu" },
        { name: "Paraná", href: "/destinos/parana" },
        { name: "Nosotros", href: "/nosotros" },
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "#", target: "_blank" },
        { name: "Instagram", href: "#", target: "_blank" },
        { name: "Facebook", href: "#", target: "_blank" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col gap-8 md:grid md:grid-cols-3">
                {/* Logo / Branding */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <h2 className="text-xl font-bold mb-2 text-center md:text-left">Alquileres Turisticos Entre Ríos</h2>
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        Intra Software
                    </p>
                </div>

                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Destinos destacados</h3>
                    <ul className="space-y-1">
                        {pages.map((page) => (
                            <li key={page.name}>
                                <Link href={page.href} className="hover:text-gray-400 text-sm">
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
                                className="hover:text-gray-400 text-sm"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Alquileres Turisticos Entre Ríos. Todos los derechos reservados.
            </div>
        </footer>
    );
}
