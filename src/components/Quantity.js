import React, { useState } from "react"

const Quantity = props => {
    const [quantity, setQuantity] = useState(props.qty? props.qty : 1)

    const setQuantityHandler = (operation) => {
        setQuantity(qty => {
            let newQty = qty
            if(operation === '-' && qty > 1){
                newQty = qty - 1
            }
            else if(operation === '+'){
                newQty = qty + 1
            }
            return newQty
        })
    }

    return (
        <div className={`flex justify-center items-center ${props.className}`}>
            <svg onClick={() => setQuantityHandler('-')} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
            <div className="mx-1 border-2 px-4 py-2 border-emerald-600 rounded-lg">{quantity}</div>
            <svg onClick={() => setQuantityHandler('+')} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
    )
}

export default Quantity