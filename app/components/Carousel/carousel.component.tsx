'use client'
// import Image from "next/image";
import React from "react";
import CarouselProps from "@/app/components/Carousel/carousel.type";
import SlideElement from "@/app/components/Carousel/slide";

// const DURATION = 700
// const BUTTON_STYLE = 'p-2 text-2xl text-white cursor-pointer'


const Carousel: React.FC<CarouselProps> = () => {

    // const [carousel, setCarousel] = useState([])
    // const [offset, setOffset] = useState(0)
    // const [duration, setDuration] = useState(DURATION)
    // const [isTransition, setIsTransition] = useState(false)
    // const [navigate, setNavigate] = useState([])

// построение галереи
//     useEffect(() => {
//         const slidesArr = [data[data.length - 1], ...data, data[0]]
//
//         const gallery = slidesArr.map(() => {
//             return (
//                 <span> dsggsgs</span>
//             )
//         })
//
//
//     }, [])

    // useEffect(() => {
    //     const navigateArr = data.map((el, i) => {
    //         return(
    //             <div
    //                 key={i+1}
    //                 onClick={() => dotClick(i+1)}
    //                 className={'w-2 h-auto bg-white rounded-full cursor-pointer'}
    //                 style={{
    //                     backgroundColor: (offset === (i+1)*100) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.2)'
    //                 }}
    //             ></div>
    //         )
    //     } )
    //     // setNavigate(navigateArr)
    // }, [offset])
//  блокирование кнопок
//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             setIsTransition(false);
//         }, DURATION);
//         return () => clearTimeout(timeoutId);
//     }, [isTransition]);


    // useEffect(() => {
    //     let timeoutId;
    //     if(offset === 0) {
    //         timeoutId = setTimeout(() => {
    //             setDuration(0)
    //             setOffset((carousel.length - 2) * 100)
    //         }, DURATION)
    //     }
    //     if(offset === ((carousel.length - 1) * 100)) {
    //         timeoutId = setTimeout(() => {
    //             setDuration(0)
    //             setOffset(100)
    //         }, DURATION)
    //     }
    //     return () => clearTimeout(timeoutId)
    // }, [offset])



// buttons
//     const previousSlide = () => {
//         if(!duration) setDuration(DURATION)
//
//         setIsTransition(true);
//         if (offset === 0) setOffset(0)
//         else setOffset(offset - 100)
//     }
//     const nextSlide = () => {
//         if(!duration) setDuration(DURATION)
//
//         setIsTransition(true);
//         if (offset === (carousel.length - 1) * 100) setOffset((carousel.length - 1) * 100)
//         else setOffset(offset + 100)
//     }

    // function dotClick(key) {
    //     setDuration(DURATION)
    //     setOffset(key*100)
    // }

    const transitionStyle = {
        transition: `transform ${700}ms`,
        transform: `translateX(-${100}%)`
    }

    return (
        <div className={'overflow-scroll relative'}>
            <div className={'flex transition ease-out'}
                 style={transitionStyle}>

                <SlideElement url={'/cover/shot_1.jpeg'} alt={'shot'}/>





            </div>

        </div>
    )
}

export default Carousel

// <div className='overflow-hidden relative bg-gray-300'>
//     <div className={`flex transition ease-out h-[300px] bg-gray-300`}
// style={{
//     transition: `transform ${duration}ms`,
//         transform: `translateX(-${offset}%)`
// }}>
// {carousel}
// </div>
// <div className='absolute top-1/2 -translate-y-1/2 h-30 w-full flex justify-between item-center pl-5 pr-5'>
//     <button disabled={isTransition} onClick={previousSlide} className={BUTTON_STYLE}>
//         <Image
//             src={'/icons/left-arrow.svg'}
//             width={30}
//             height={30}
//         />
//     </button>
//     <button disabled={isTransition} onClick={nextSlide} className={BUTTON_STYLE}>
//         <Image
//             src={'/icons/right-arrow.svg'}
//             width={30}
//             height={30}
//         />
//     </button>
// </div>
// <div className={'absolute bottom-5 w-full h-2 flex gap-2 justify-center'}>
//     {navigate}
// </div>
//
// </div>