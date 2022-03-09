import React, { useState } from "react"
import Color from "./Color"
import Quantity from "./Quantity"

const CartProduct = props => {
    const [quantity, setQuantity] = useState(props.quantity)

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

    return (
        <div className={`flex flex-col border-b md:flex-row md:justify-between ${props.className} py-8 lg:py-0`}>
            <div className="flex">
                <img className="w-1/2 h-auto max-w-[290px] object-contain p-4" src={props.image}/>
                <div className="flex flex-col items-center w-full justify-center ml-2 overflow-hidden md:mr-8">
                    <div className="text-left font-zinc-700 font-semibold text-lg truncate">{props.title}</div>
                </div>
            </div>
            <div className="flex flex-col 2xl:flex-row justify-center items-center mt-4 lg:mt-0 lg:mr-8 2xl:mr-12">
                <div className="2xl:mr-12">
                    <label className="font-semibold block text-zinc-600 mb-2">Quantity</label>
                    <Quantity qty={quantity} setQty={setQuantityHandler} className=""/>
                </div>
                <div className="text-2xl mt-4 2xl:mt-0">${props.total}</div>
            </div>
        </div>
    )
}

export default CartProduct