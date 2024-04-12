'use client'
import Image from "next/image";
import React from "react";
import {Slide} from './carousel.type'
const H2_STYLE = 'text-opacity-10 text-5xl lg:text-[300px] md:text-8xl sm:text-6xl uppercase font-black text-orange-200 select-none'

export default function SlideElement({slide}: Slide) {

    return(
        <div className={'min-w-full relative'}>
            <Image src={slide.url}
                   alt={slide.legend}
                   width="0"
                   height="0"
                   sizes="100vw"
                   className="block w-full"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <h2 className={H2_STYLE}>{slide.legend}</h2>
            </div>
        </div>
    )
}

