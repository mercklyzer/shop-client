import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import Color from "../components/Color"
import Quantity from "../components/Quantity"
import { addProduct } from "../redux/cartRedux"

import product1 from '../assets/product_1.jpg'
import product2 from '../assets/product_2.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Product = props => {
    const location = useLocation()
    const id = location.pathname.split("/")[3]


    return (
        <div className="section grid grid-cols-12 gap-12 w-full">
            <div className="col-span-7">
            <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-auto w-full object-cover" src={product1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto w-full object-cover" src={product2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto w-full object-cover" src={product1} />
                </SwiperSlide>
            </Swiper>
            </div>

            <div className="col-span-5 text-left bg-red-700">
                Angelo Dining Chair
            </div>
        </div>
    )
}

export default Product