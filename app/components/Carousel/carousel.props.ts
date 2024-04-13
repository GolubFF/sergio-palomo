export interface SlideData {
    id: number;
    url: string;
    alt: string;
    description?: string;
}

export interface CarouselData {
    auto?: boolean;
    data: SlideData[];
}