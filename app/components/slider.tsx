'use client'
import React, { useState, useEffect } from 'react';

const images = [
    'https://via.placeholder.com/400x200/FF0000',
    'https://via.placeholder.com/400x200/00FF00',
    'https://via.placeholder.com/400x200/0000FF'
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden w-[400px] h-[200px]">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;