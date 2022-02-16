import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const sliderData = [
    {
        image: require('../assets/model-1.png'),
        title: 'SPRING SALE',
        subtitle: 'DON\'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.',
        data: "Slider 1",
        bgColor: 'bg-rose-200'
    },
    {
        image: 'https://i.ibb.co/DG69bQ4/2.png',
        title: 'AUTUMN COLLECTION',
        subtitle: 'DON\'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.',
        data: "Slider 1",
        bgColor: 'bg-green-200'
    },
    {
        image: 'https://i.ibb.co/cXFnLLV/3.png',
        title: 'LOUNGEWEAR LOVE',
        subtitle: 'DON\'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.',
        data: "Slider 1",
        bgColor: 'bg-cyan-200'
    },
]


const Slider = props => {
    return (
        <div className="hidden md:block min-h-[calc(100vh-6rem)]">
            <Swiper navigation={true} modules={[Navigation]} className="mySwipe border-2  h-full">
                {
                    sliderData.map(data => <SwiperSlide>
                        <div className={`grid md:grid-cols-2 h-full ${data.bgColor}`}>
                            <div className="flex justify-center items-center">
                                <img 
                                    className="object-fit h-full"
                                    src={data.image}
                                />
    
                            </div>
                            <div className="h-full w-full flex flex-col justify-center items-center ">
                                <div className="text-7xl font-semibold mb-12">{data.title}</div>
                                <div className="text-xl mb-6">{data.subtitle}</div>
                                <div className="text-lg font-medium px-4 py-2 uppercase border-gray-800 border-2">Shop Now</div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default Slider