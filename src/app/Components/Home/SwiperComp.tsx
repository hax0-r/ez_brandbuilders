"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const SwiperComp = () => {

    const Services = [
        {
            id: 1,
            title: "Website Design Services",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "Whether you want to build a new website from scratch or redesign an old one, we customize our strategy to fit your particular requirements and objectives. We develop interactive websites by blending innovative designs with functionality. Our team ensures that every minor detail aligns with your brand and company. Elevate your online presence with our custom web design services.",
        },
        {
            id: 2,
            title: "Cloud Services",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "Stifftech provides comprehensive cloud services that streamline your operations, enhance security, and reduce costs. Whether you want to switch to a new platform or optimize your current cloud configuration, we have the knowledge and resources to transform your company completely.",
        },
        {
            id: 3,
            title: "Web Application Development",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "From e-commerce platforms to sophisticated enterprise solutions, we ensure that our web app development services are robust, responsive, and aligned with your strategic objectives. With a focus on innovation and quality, StiffTech Solutions transforms your vision into a powerful web presence that stands out in the digital landscape.",
        },
        {
            id: 4,
            title: "UI/UX Design",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "We use the latest technologies to guarantee smooth and captivating user experiences for your business platforms. With our top-notch UI/UX design services, discover the ideal balance between simple and appealing platforms.",
        },
        {
            id: 5,
            title: "Digital Marketing",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "With our team of digital marketing experts, we combine innovative strategies through our marketing funnel to give your business a significant ROI. Transform your online presence from awareness to loyalty, engage, and build brand steadily with our digital marketing services.",
        },
        {
            id: 6,
            title: "DevOps Services",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "We offer comprehensive DevOps services to streamline your operations, enhance security, and reduce costs. Whether you want to switch to a new platform or optimize your current cloud configuration, we have the knowledge and resources to transform your company completely.",
        },
        {
            id: 7,
            title: "Mobile App Development",
            image: "https://pagedone.io/asset/uploads/1695365240.png",
            description: "Whether you want to build a new website from scratch or redesign an old one, we customize our strategy to fit your particular requirements and objectives. We develop interactive websites by blending innovative designs with functionality. Our team ensures that every minor detail aligns with your brand and company. Elevate your online presence with our custom web design services.",
        },
    ]

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 1 slide for small screens
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2, // 2 slides for tablets
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for desktops
                        spaceBetween: 30,
                    },
                }}
            >

                {
                    Services.map(({ id, title, image, description }) => (
                        <SwiperSlide key={id}>
                            <div className="relative border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
                                <div className="block overflow-hidden">
                                    <Image src={image} className="w-full h-60 rounded-t-lg object-cover" width={100} height={100} alt="Card image" />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">{title}</h4>
                                    <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                                        {description.slice(0, 135)}...
                                    </p>
                                    <button className="bg-primary shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-500 hover:bg-primary/80">Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

export default SwiperComp

