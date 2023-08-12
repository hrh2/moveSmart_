import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from '../img/prof.jpg';

const data = [
    {
        review: 'lorem ipsum...',
    },
    {
        review: 'lorem ipsum...',
    },
    {
        review: 'lorem ipsum...',
    },
    {
        review: 'lorem ipsum...',
    },
    {
        review: 'lorem ipsum...',
    },
];

export default function Images() {
    return (
        <Swiper
            className=' gap-1 p-3'
            modules={[Navigation,Pagination]}//hope
            spaceBetween={40}
            slidesPreView={3}
            navigation
        >
            {data.map(({ review }, index) => (
                <SwiperSlide
                    key={index}
                    className='aspect-square w-[20rem!important] bg-cover bg-center rounded-xl'
                    style={{
                        backgroundImage: `url(${Image})`,
                        transform: index === 0 ? 'scale(1)' : 'scale(0.8)', // Adjust scaling factor
                    }}
                >
                </SwiperSlide>
            ))}
        </Swiper>

    );
}