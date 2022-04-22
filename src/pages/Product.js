import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import Quantity from "../components/Quantity"
import { addProduct } from "../redux/cartRedux"
import {RotatingLines} from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { getProduct } from "../apiCalls/product.apiCall"
import { useUser } from "../hooks/useUser"

const Product = props => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [token, user, role] = useUser()
    const id = location.pathname.split("/")[2]
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [product, setProduct] = useState()
    const [slideImages, setSlideImages] = useState([])
    let toastRef = useRef(null)
    const [onOutOfStock, setOnOutOfStock] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true)

            const [data, err] = await getProduct(null, id)
            if(data){
                setProduct(data)
                console.log(data);
                const images = [data.displayImg, data.previewImg, ...data.otherImgs]
                setSlideImages(images)
                setOnOutOfStock(() => () => toastRef.current = toast.error(`Only ${data.stock} pc${data.stock > 1? 's': ''} left.`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    toastId: "a"
                }))
            
            }
            if(err){
                setIsError(true)
            }

            setIsLoading(false)            
        }
        fetchProduct()
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
        if(!user){
            navigate('/signup')
        }
        else{
       
            if(quantity <= product.stock){
                setProduct(data => ({...data, stock: data.stock - quantity}))
                setOnOutOfStock(() => () => toastRef.current = toast.error(`Only ${product.stock - quantity} pc${product.stock - quantity > 1? 's': ''} left.`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }))
                dispatch(addProduct({product: product, quantity, total:product.price*quantity}))
            }
            else{
                
                onOutOfStock()
                console.log("Out of stock");
            }
        }

        
    }

    return (
        <>
        {isLoading && <div className="flex justify-center py-60"><RotatingLines width="40"/></div>}
        {!isLoading && product && <div className="md:section md:grid grid-cols-12 md:gap-6 lg:gap-12 w-full">
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
                {onOutOfStock && <>
                <button 
                    ref={toastRef}
                    onClick={onOutOfStock}
                    className="w-0 overflow-hidden">
                    Toast
                </button>
                <ToastContainer
                theme="dark"
                rtl={false} />
                </>
                }

                <div className="my-16 text-left text-zinc-500 font-regular">
                    {product.desc}
                </div>
            </div>
        </div>}
        </>
    )
}

export default Product