'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        id: 1,
        image: "/images/cdelu2.png",
    },
    {
        id: 2,
        image: "/images/cdelu1.png",
    },
    {
        id: 3,
        image: "/images/cdelu3.png",
    },
];

const Slider: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (hovered) return;
        const interval = setInterval(
            () => setCurrent((i) => (i + 1) % slides.length),
            3000
        );
        return () => clearInterval(interval);
    }, [hovered]);

    return (
        <div className="relative max-w-full mx-auto mt-5 overflow-hidden shadow-xl">
            <div
                className="relative h-72 sm:h-96 md:h-[500px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                role="region"
                aria-label="Image Slider"
            >
                {slides.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
                            }`}
                        aria-hidden={i !== current}
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-5 h-5 rounded-full ${i === current ? "bg-white" : "bg-gray-500"}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Ir al slide ${i + 1}`}
                    />
                ))}
            </div>

            <button
                className="absolute top-1/2 left-6 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 hover:bg-blue-500 hover:text-white transition"
                onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
                aria-label="Anterior"
            >
                <FaChevronLeft className="text-3xl" />
            </button>
            <button
                className="absolute top-1/2 right-6 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 hover:bg-blue-500 hover:text-white transition"
                onClick={() => setCurrent((c) => (c + 1) % slides.length)}
                aria-label="Siguiente"
            >
                <FaChevronRight className="text-3xl" />
            </button>
        </div>
    );
};

export default Slider;