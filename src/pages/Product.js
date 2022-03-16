import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
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
    const dispatch = useDispatch()

    const id = location.pathname.split("/")[3]
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState()
    const [slideImages, setSlideImages] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)

            // move this to apiCalls.js
            try{
                const res = await axios.get(`http://localhost:5000/products/find/${id}`)
                const fetchedProduct = res.data
                setProduct(fetchedProduct)
                console.log(fetchedProduct);
                const images = [fetchedProduct.displayImg, fetchedProduct.previewImg, ...fetchedProduct.otherImgs]
                setSlideImages(images)
            }
            catch(err){
                console.log(err);
            }
            setIsLoading(false)            
        }
        getProduct()
    }, [])

    const setQuantityHandler = (operation) => {
        if(operation === '-' && quantity > 1){
            setQuantity(qty => qty - 1)
        }
        else if(operation === '+'){
            setQuantity(qty => qty + 1)
        }
    }

    const onChangeQuantity = (qty) => {
        setQuantity(qty)
    }

    const handleClick = () => {
        dispatch(addProduct({product: product, quantity, total:product.price*quantity}))
    }

    return (
        !isLoading && <div className="md:section md:grid grid-cols-12 md:gap-6 lg:gap-12 w-full">
            <div className="md:col-span-7">
            <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    slideImages.map((img, i) => <SwiperSlide key={i}><img className="h-auto w-full object-cover" src={img} /></SwiperSlide>)
                }
            </Swiper>
            </div>

            <div className="section-sm md:col-span-5 text-left md:p-8">
                <div className="font-semibold text-2xl mt-8 md:mt-0 md:text-4xl text-zinc-800">{product.title}</div>
                <div className="text-orange-600 font-semibold text-base md:mt-2">{product.sold} sold</div>
                <div className="text-right text-2xl md:text-3xl text-zinc-800 font-semibold mt-4 md:mt-16">${product.price}</div>

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
                    {product.desc}
                </div>
            </div>
        </div>
    )
}

export default Product