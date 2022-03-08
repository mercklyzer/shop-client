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

            <div className="col-span-5 text-left p-8">
                <div className="font-semibold text-4xl text-zinc-800">Romie Boy Dining Chair</div>
                <div className="text-orange-600 font-semibold text-base mt-2">23 sold</div>
                <div className="text-right text-3xl text-zinc-800 font-semibold mt-16">$299</div>

                <div className="flex justify-start items-center bg-zinc-100 p-2 mt-4">
                    <img 
                        className="w-auto h-8 mr-4"
                        src={'https://cdn.roveconcepts.com/sites/default/files/shield-rove.png'} 
                    />
                    <div>
                        <div className="text-red-500 underline cursor-pointer font-medium">Accident Protection</div>
                        <div className="text-zinc-500 font-semibold text-sm">Accident Protection Plans protect against stains, rips & more</div>
                    </div>
                </div>

                <div className="mt-8">
                    <label className="block mb-4 font-semibold text-zinc-600 ">Quantity</label>

                    <div className="flex h-10 ">
                        <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input 
                            className="font-medium outline-none border appearance-none px-4 py-2 flex justify-center items-center text-center w-24 hover:font-bold"
                            type="number" min={1}
                        />
                        <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>

                <button className="mt-16 border border-zinc-900 w-full py-2 text-center">
                    ADD TO CART
                </button>

                <div className="mt-16 text-left text-zinc-500 font-regular">
                    The timeless silhouette of the Angelo Dining Chair exudes luxury within the home. Sleek black powder coated legs wrap around a full and accommodating seat and backrest filled with premium high density cushioning. Angelo's chic ambiance encourages a leisurely and indulgent dining experience, adding to your home's overall aesthetic. Bring Italian inspired design home with this modern piece available in your choice of premium upholstery.
                </div>
            </div>
        </div>
    )
}

export default Product