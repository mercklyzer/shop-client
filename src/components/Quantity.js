import React, { useState } from "react"

const Quantity = ({qty, setQty, typeQty, className}) => {
    const [quantity, setQuantity] = useState(qty)

    const handleQuantity = (operation, value=1) => {
        if(operation === '-' && quantity > 1){
            setQuantity(qty => Number(qty)-1)
            setQty(operation)
        }
        else if(operation === '+'){
            setQuantity(qty => Number(qty)+1)
            setQty(operation)
        }
        else if(operation === 'type'){
            value = value <= 0? 1 : value
            setQuantity(value.toString())
            typeQty(value)
        }
    }

    return (
        <div className={`flex h-10 ${className}`}>
            <button 
                onClick={() => handleQuantity('-')}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                <span className="m-auto text-2xl font-thin">-</span>
            </button>
            <input 
                className="font-medium outline-none border appearance-none px-4 py-2 flex justify-center items-center text-center w-24 hover:font-bold"
                type="number"
                value={quantity}
                onChange={(e) => handleQuantity('type', Number(e.target.value))}
            />
            <button 
                onClick={() => handleQuantity('+')}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
                >
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    )
}

export default Quantity