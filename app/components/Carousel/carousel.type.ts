export type Slide = {
    id?: number;
    url?: string;
    legend?: string;
    color?: string;
    width?: number;

};

interface CarouselProps {
    data: Slide[];
}

export default CarouselProps