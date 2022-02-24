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
        <div className={`flex flex-col border-b-2 sm:flex-row sm:justify-between ${props.className}`}>
            <div className="flex">
                <img className="w-1/2 max-w-[290px] object-contain" src={props.image}/>
                <div className="flex flex-col items-start justify-center ml-2">
                    <div className="text-left mb-2">Product: {props.title}</div>
                    <div className="hidden sm:block mb-2">ID: {props.id}</div>
                    <div className="flex justify-center">
                        <Color color={props.color}/>
                        <div className="ml-4">Size: {props.size}</div>
                    </div>
                    <div className="text-left mt-2">{props.description}</div>
                </div>
            </div>
            <div className="flex items-center justify-around mb-4 sm:flex-col sm:justify-center sm:items-center sm:mr-8">
                <Quantity qty={quantity} setQty={setQuantityHandler}/>
                <div className="text-2xl sm:mt-4">${props.total}</div>
            </div>
        </div>
    )
}

export default CartProduct