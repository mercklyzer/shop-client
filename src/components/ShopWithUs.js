import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import shop1 from '../assets/shop-with-us-1.jpg'
import shop2 from '../assets/shop-with-us-2.jpg'
import shop3 from '../assets/shop-with-us-3.jpg'
import useDimensions from "../hooks/useDimensions";

const getSlidesPerView = (width) => {
    let slides = 1
    if(width > 640){
        slides = 2
    }
    else if(width>1024){
        slides = 3
    }
    return slides
}

const ShopWithUs = props => {
    const {width, height} = useDimensions()

    return (
        <div className="py-16">
            <div className="section-header">Shop With Us</div>
            <Swiper
                slidesPerView={getSlidesPerView(width)}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >                
                <SwiperSlide>
                    <div className="h-[40em] sm:h-[50em] flex flex-col">
                        <img className="object-cover basis-[80%] " src={shop1}/>
                        <div className="bg-zinc-700 text-white p-8 basis-[20%]">
                            <div className="text-left font-medium text-2xl md:text-3xl mb-4">FLEXIBLE</div>
                            <div className="text-left sm:text-center md:text-lg">We accept online payments & cash on delivery.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[40em] sm:h-[50em] flex flex-col">
                        <img className="object-cover basis-[80%]" src={shop2}/>
                        <div className="bg-zinc-700 text-white p-8 basis-[20%]">
                            <div className="text-left font-medium text-2xl md:text-3xl mb-4">COMPLETELY SAFE</div>
                            <div className=" text-left sm:text-center md:text-lg">We handle your orders with tender love and care.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[40em] sm:h-[50em] flex flex-col">
                        <img className="object-cover basis-[80%]" src={shop3}/>
                        <div className="bg-zinc-700 text-white p-8 basis-[20%]">
                            <div className="text-left font-medium text-2xl md:text-3xl  mb-4">FAST & EASY</div>
                            <div className="text-left sm:text-center md:text-lg">We guarantee a 100% refund if your order doesn't arrive within 10 working days.</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default ShopWithUs