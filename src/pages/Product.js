import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import Color from "../components/Color"
import Quantity from "../components/Quantity"
import { addProduct } from "../redux/cartRedux"

const Product = props => {
    const location = useLocation()
    const id = location.pathname.split("/")[3]
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState()
    const [selectedSize, setSelectedSize] = useState()
    const [quantity, setQuantity] = useState(0)

    const setQuantityHandler = (operation) => {
        setQuantity(qty => {
            let newQty = qty
            if(operation === '-' && qty > 0){
                newQty = qty - 1
            }
            else if(operation === '+'){
                newQty = qty + 1
            }
            return newQty
        })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)
            try{
                const res = await axios.get(`http://localhost:5000/products/find/${id}`)
                setProduct(res.data)
            }
            catch(err){
                console.log(err);
            }
            setIsLoading(false)
        }

        getProduct()
    }, [id])

    useEffect(() => {
        if(product){
            setSelectedSize(product.size[0])
        }
    }, [product])

    const handleClick = () => {
        dispatch(addProduct({product: {...product, size: selectedSize}, quantity, total:product.price*quantity}))
    }

    return (
        !isLoading? <div className="section grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-x-8 md:mt-8">
            <img className="mb-4 object-contain w-full" src={product.img} />
            <div>
                <div className="text-4xl text-left mb-8 lg:text-5xl">{product.title}</div>
                <div className="text-left mb-4">{product.desc}</div>
                <div className="text-left text-2xl mb-4 md:text-3xl lg:text-4xl">$ {product.price}</div>
                <div className="md:flex md:justify-between 2xl:max-w-[50%]">
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-light">Color</span>
                        {product.color.map((color, i) => i === 0? <Color color={color} className="ml-4"/> : <Color color={color} className="ml-2"/>)}
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-light mr-7">Size</span>
                        <select className="border border-black px-2 py-1 select-none" onChange={(e) => setSelectedSize(e.target.value)}>
                            {product.size.map((size, i) => i === 0? 
                                <option key={i} value={size}>{size}</option>
                                :<option key={i} value={size}>{size}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between 2xl:max-w-[50%]">
                    <Quantity qty={quantity} setQty={setQuantityHandler} className="mb-8"/>
                    <button onClick={handleClick} disabled={quantity <= 0} className="py-2 px-4 mb-8 border-2 border-emerald-600 cursor-pointer hover:bg-emerald-600 hover:text-white duration-200 disabled:opacity-50 disabled:cursor-auto disabled:transform-none disabled:transition-none disabled:bg-emerald-600 disabled:text-white select-none">ADD TO CART</button>
                </div>
            </div>
        </div>
        : <div>Fetching data...</div>
    )
}

export default Product