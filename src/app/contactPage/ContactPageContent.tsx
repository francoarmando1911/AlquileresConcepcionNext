import { Button } from '@/components/ui/button'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPageContent() {
    const miNumeroFijo = '543442310036';  

    const whatsappUrl = `https://wa.me/${miNumeroFijo}?text=Hola,%20estoy%20interesado%20en%20una%20propiedad`;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">Contacto</h1>

            <p>Nos podemos contactar por las sigientes vias de comunicacion: </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaWhatsapp size={18} /> Contactar por WhatsApp
                    </Button>
                </a>
            </div>
        </div>
    )
}
