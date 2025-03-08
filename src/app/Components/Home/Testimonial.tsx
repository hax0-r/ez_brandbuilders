"use client";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
// import Image from "next/image";

const Testimonial = () => {
    const swiperRef = useRef<Swiper | null>(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".mySwiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 2,
            spaceBetween: 28,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
            },
        });
    }, []);

    return (
        <section className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
                    <div className="w-full lg:w-2/5">
                        <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
                        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
                            23k+ Customers gave their{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primeryColor to-secondary">
                                Feedback
                            </span>
                        </h2>
                        {/* Slider controls */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <button className="w-12 flex button-prev items-center justify-center h-12 border border-primeryColor text-primeryColor rounded-full">
                                <IoMdArrowRoundBack size={22} />
                            </button>
                            <button className="w-12 flex button-next items-center justify-center h-12 border border-primeryColor text-primeryColor rounded-full">
                                <IoMdArrowRoundForward size={22} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5">
                        {/* Slider wrapper */}
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-secondrayColor ">
                                        <div className="flex items-center gap-5 mb-5 sm:mb-9">
                                            {/* <Image className="rounded-full object-cover" src={index % 2 === 0 ? "https://pagedone.io/asset/uploads/1696229969.png" : "https://pagedone.io/asset/uploads/1696229994.png"} alt="avatar" /> */}
                                            <div className="grid gap-1">
                                                <h5 className="text-gray-900 font-medium transition-all duration-500">{index % 2 === 0 ? "Jane D" : "Harsh P."}</h5>
                                                <span className="text-sm leading-6 text-gray-500">{index % 2 === 0 ? "CEO" : "Product Designer"}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <FaStar key={starIndex} />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                                            {index % 2 === 0
                                                ? "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance."
                                                : "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free."}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
