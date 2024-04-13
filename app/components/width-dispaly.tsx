'use client'
import React, { useState, useEffect } from 'react';

const Ancho: React.FC = () => {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <p>Ширина экрана: {width}px</p>
        </div>
    );
}

export default Ancho;