export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Alquileres Concepción. Intra Software. Todos los derechos reservados.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Instagram</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
