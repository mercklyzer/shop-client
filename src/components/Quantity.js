import React from "react"

const Quantity = ({quantity, handleQuantity, className}) => {
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
                type="number" min={1} value={quantity}
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