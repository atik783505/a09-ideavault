"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Banner = () => {
    const slides = [
        {
            id: 1,
            tagline: "CAPTURE EVERYTHING",
            title: "Turn Fleeting Thoughts Into Future Startups",
            description: "Don't let your next billion-dollar idea slip away. Lock your raw concepts safely inside the vault before they fade.",
            bg: "from-blue-500/10 via-transparent to-indigo-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-indigo-500/10",
            accent: "text-blue-600 dark:text-blue-400"
        },
        {
            id: 2,
            tagline: "STRUCTURE & VALIDATE",
            title: "Blueprint Your Concepts with Precision",
            description: "Move beyond loose thoughts. Organize your innovation by defining target audiences and core problem statements.",
            bg: "from-sky-500/10 via-transparent to-blue-500/5 dark:from-sky-500/10 dark:via-transparent dark:to-blue-500/10",
            accent: "text-sky-600 dark:text-sky-400"
        },
        {
            id: 3,
            tagline: "BUILD THE FUTURE",
            title: "From Locked Vault to Real-World Products",
            description: "Stop waiting for the perfect moment. Filter your highest-scoring concepts and transform them into launched SaaS platforms.",
            bg: "from-indigo-500/10 via-transparent to-purple-500/5 dark:from-indigo-500/10 dark:via-transparent dark:to-purple-500/10",
            accent: "text-indigo-600 dark:text-indigo-400"
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
                    <SwiperSlide key={slide.id} className="w-full h-full">
                        <div className={`w-full h-full flex flex-col items-center justify-center text-center px-6 py-12 md:px-12 bg-gradient-to-br ${slide.bg} border border-default-100/50 backdrop-blur-sm rounded-2xl`}>

                            <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${slide.accent}`}>
                                {slide.tagline}
                            </span>

                            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-5xl tracking-tight text-foreground max-w-3xl leading-tight transition-all duration-500">
                                {slide.title}
                            </h2>
                            <p className="mt-4 text-sm md:text-medium text-default-500 max-w-xl leading-relaxed">
                                {slide.description}
                            </p>
                            <Link href='/all-ideas'>
                                <Button
                                    size="lg"
                                    className="mt-8 font-semibold px-8 rounded-md"
                                >
                                    Explore Ideas
                                </Button>
                            </Link>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;