import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const logos = [
    { src: "https://www.quantumworkplace.com/hs-fs/hubfs/forvis.png?width=250&name=forvis.png", alt: "Forvis logo" },
    { src: "https://www.quantumworkplace.com/hubfs/getty-images_logo.svg", alt: "Getty Images logo" },
    { src: "https://www.quantumworkplace.com/hs-fs/hubfs/2023-Quantum-workplace/Home/fossilgroup-logo.png", alt: "Fossil Group logo" },
    { src: "https://www.quantumworkplace.com/hubfs/dominos-logo.svg", alt: "Dominos logo" },
    { src: "https://www.quantumworkplace.com/hubfs/2023-Quantum-workplace/Home/Anders-Logo.svg", alt: "Anders logo" },
    { src: "https://www.quantumworkplace.com/hubfs/Seacoast_Bank-2.svg", alt: "Seacoast Bank logo" },
];

export default function IndexSectionLogoCloudsLightColor9() {
    return (
        <section className="py-20 text-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
                        <div className="max-w-md mx-auto">
                            <h2 className="mb-4 text-4xl lg:text-4xl font-bold font-heading leading-tight">Trusted by <span className="text-orange-600">10,000+</span> places to work</h2>
                            <p className="text-gray-800 leading-loose">Empowering organizations worldwide to foster employee growth and success.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        {/* Desktop view */}
                        <div className="hidden lg:flex lg:flex-wrap -mx-2">
                            {logos.map((logo, index) => (
                                <div key={index} className="mb-4 w-1/3 px-2">
                                    <div className="py-16 px-4 bg-gray-50 rounded flex items-center justify-center h-32">
                                        <img 
                                            className="max-w-[120px] max-h-16 w-auto h-auto" 
                                            src={logo.src} 
                                            alt={logo.alt} 
                                            loading="lazy" 
                                            width={120} // Added explicit width
                                            height={64} // Added explicit height
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Mobile/Tablet carousel */}
                        <div className="lg:hidden logo-carousel-container">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={2}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                    },
                                }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                pagination={{ clickable: true }}
                                className="pb-16" // Increased padding to accommodate lower pagination
                            >
                                {logos.map((logo, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="py-16 px-4 bg-gray-50 rounded flex items-center justify-center h-32">
                                            <img 
                                                className="max-w-[120px] max-h-16 w-auto h-auto" 
                                                src={logo.src} 
                                                alt={logo.alt} 
                                                loading="lazy" 
                                                width={120} // Added explicit width
                                                height={64} // Added explicit height
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
