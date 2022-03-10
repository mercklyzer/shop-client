import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import Color from "../components/Color"
import Quantity from "../components/Quantity"
import { addProduct, replaceProduct } from "../redux/cartRedux"

import product1 from '../assets/product_1.jpg'
import product2 from '../assets/product_2.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Product = props => {
    const location = useLocation()
    const dispatch = useDispatch()

    const id = location.pathname.split("/")[3]
    const [quantity, setQuantity] = useState(1)

    const product = {
        _id:1,
        title: 'Romie Boy Sofa',
        category: 'sofa',
        description: 'The timeless silhouette of the Angelo Dining Chair exudes luxury within the home. Sleek black powder coated legs wrap around a full and accommodating seat and backrest filled with premium high density cushioning. Angelo\'s chic ambiance encourages a leisurely and indulgent dining experience, adding to your home\'s overall aesthetic. Bring Italian inspired design home with this modern piece available in your choice of premium upholstery.',
        displayImage: product1,
        price: 400
    }

    const setQuantityHandler = (operation) => {
        if(operation === '-' && quantity > 1){
            setQuantity(qty => qty - 1)
        }
        else if(operation === '+'){
            setQuantity(qty => qty + 1)
        }
    }

    const onChangeQuantity = (qty) => {
        if(qty > 0){
            setQuantity(qty)
        }
        else{
            setQuantity(1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({product: product, quantity, total:product.price*quantity}))
    }

    return (
        <div className="md:section md:grid grid-cols-12 md:gap-6 lg:gap-12 w-full">
            <div className="md:col-span-7">
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

            <div className="section-sm md:col-span-5 text-left md:p-8">
                <div className="font-semibold text-2xl mt-8 md:mt-0 md:text-4xl text-zinc-800">Romie Boy Dining Chair</div>
                <div className="text-orange-600 font-semibold text-base md:mt-2">23 sold</div>
                <div className="text-right text-2xl md:text-3xl text-zinc-800 font-semibold mt-4 md:mt-16">$299</div>

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

                    <Quantity qty={quantity} setQty={setQuantityHandler} typeQty={onChangeQuantity} className=""/>
                </div>

                <button 
                    onClick={handleClick}
                    className="mt-12 md:mt-16 border border-zinc-900 w-full py-2 text-center hover:bg-zinc-900 hover:text-white duration-100"
                >
                    ADD TO CART
                </button>

                <div className="my-16 text-left text-zinc-500 font-regular">
                    The timeless silhouette of the Angelo Dining Chair exudes luxury within the home. Sleek black powder coated legs wrap around a full and accommodating seat and backrest filled with premium high density cushioning. Angelo's chic ambiance encourages a leisurely and indulgent dining experience, adding to your home's overall aesthetic. Bring Italian inspired design home with this modern piece available in your choice of premium upholstery.
                </div>
            </div>
        </div>
    )
}

export default Product