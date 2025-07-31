import { Bed, Bath, Star } from 'lucide-react';

const properties = [
    {
        id: 1,
        title: 'Moderno departamento en el centro',
        location: 'Centro, Concepción del Uruguay',
        price: '25,000',
        bedrooms: 2,
        bathrooms: 1,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        title: 'Casa con pileta y jardín',
        location: 'Barrio Residencial',
        price: '45,000',
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        title: 'Loft acogedor cerca del río',
        location: 'Costanera',
        price: '20,000',
        bedrooms: 1,
        bathrooms: 1,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function FeaturedProperties() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Propiedades Destacadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star size={18} fill="currentColor" />
                                        <span className="font-bold">{property.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{property.location}</p>
                                <div className="flex items-center gap-6 text-gray-700 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Bed size={20} />
                                        <span>{property.bedrooms} hab.</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath size={20} />
                                        <span>{property.bathrooms} baño/s</span>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-blue-600">
                                    ${property.price} <span className="text-base font-normal text-gray-500">/ mes</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
