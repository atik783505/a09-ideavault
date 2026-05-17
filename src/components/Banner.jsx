"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@heroui/react';

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Share Your Startup Vision",
            bg: "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-950/40 dark:to-indigo-950/40"
        },
        {
            id: 2,
            title: "Validate Ideas with Community",
            bg: "bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-950/40 dark:to-blue-950/40"
        },
        {
            id: 3,
            title: "Turn Concepts into Reality",
            bg: "bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-950/40 dark:to-blue-950/40"
        }

    ];
    return (
        <div className="w-11/12 mx-auto h-[450px] rounded-2xl overflow-hidden shadow-xl mt-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`w-full h-full flex flex-col items-center justify-center text-white ${slide.bg}`}>
                            <h2 className="text-3xl font-bold md:text-5xl transition-all duration-500 transform">
                                {slide.title}
                            </h2>
                            <Button className='mt-6'>Explore Ideas</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;