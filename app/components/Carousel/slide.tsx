
import Image from "next/image";
import React from "react";
const H2_STYLE = 'text-opacity-20 text-9xl ssm:text-3xl md:text-7xl tracking-wider uppercase font-black text-gray-100 select-none'
import {SlideData} from "@/app/components/Carousel/carousel.props";



const SlideElement: React.FC<SlideData> = ({ url, alt, description = ''}) => {

    return(
        <div className={'min-w-full relative'}>
            <Image src={url}
                   alt={alt}
                   width="0"
                   height="0"
                   sizes="100vw"
                   className="block w-full"
                   priority
            />
            <div className="absolute top-0 left-0 right-0 bottom-3  flex justify-center items-end">
                <h2 className={H2_STYLE}>{description}</h2>
            </div>
        </div>
    )
}



export default SlideElement