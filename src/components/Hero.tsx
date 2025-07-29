import { Search } from 'lucide-react';

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/imgcdu.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Encontrá tu lugar ideal para descansar</h2>
                <p className="text-lg md:text-xl mb-8">Explorá las mejores propiedades turisticas en Concepción del Uruguay</p>
                <div className="w-full max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar por zona, barrio o dirección..."
                            className="w-full py-3 px-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
