
import Image from "next/image";
import React, {ButtonHTMLAttributes} from "react";



interface CarouselButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    direction: 'left' | 'right';


}
const LEFT_BUTTON = '/icons/left-arrow.svg'
const RIGHT_BUTTON = '/icons/right-arrow.svg'
const BUTTON_STYLE = 'p-2 cursor-pointer opacity-35'
const CarouselButton: React.FC<CarouselButton> = ({ direction, onClick,...props }) => {

    return(
        <button disabled={props.disabled} onClick={onClick} className={BUTTON_STYLE}>
            <Image
                src={direction === 'left' ? LEFT_BUTTON : RIGHT_BUTTON}
                alt={'button_arrow'}
                width={30}
                height={30}
            />
            </button>
    )
}

export default CarouselButton