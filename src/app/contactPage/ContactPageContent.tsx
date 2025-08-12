import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPageContent() {
    const whatsappUrl = `https://wa.me/541112345678?text=Hola,%20estoy%20interesado%20en%20una%20propiedad`;
    const linkedinUrl = `https://www.linkedin.com/in/tuperfil`;
    const instagramUrl = `https://www.instagram.com/tuperfil`;

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6">Contacto</h1>

            <div className="flex flex-wrap gap-4 mb-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaWhatsapp size={18} /> WhatsApp
                    </Button>
                </a>

                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaLinkedin size={18} /> LinkedIn
                    </Button>
                </a>

                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center gap-2 rounded-full px-6 py-3">
                        <FaInstagram size={18} /> Instagram
                    </Button>
                </a>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Nombre
                            </label>
                            <Input id="name" placeholder="Tu nombre" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <Input id="email" type="email" placeholder="tu@email.com" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                            Asunto
                        </label>
                        <Input id="subject" placeholder="¿Cómo podemos ayudarte?" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Mensaje
                        </label>
                        <Textarea id="message" rows={4} placeholder="Escribe tu mensaje aquí..." />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Enviar mensaje
                    </Button>
                </form>
            </div>
        </div>
    );
}