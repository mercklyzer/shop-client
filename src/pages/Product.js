import React, { useState } from "react"

const Product = props => {
    const [quantity, setQuantity] = useState(1)

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
        <div className="section grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-x-8 md:mt-8">
            <img className="mb-4 object-contain w-full" src={'https://i.ibb.co/S6qMxwr/jean.jpg'} />
            <div>
                <div className="text-4xl text-left mb-8 lg:text-5xl">Denim Jumpsuit</div>
                <div className="text-left mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.</div>
                <div className="text-left text-2xl mb-4 md:text-3xl lg:text-4xl">$ 20</div>
                <div className="md:flex md:justify-between 2xl:max-w-[50%]">
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-light">Color</span>
                        <div className="w-5 h-5 bg-blue-900 rounded-full ml-4"></div>
                        <div className="w-5 h-5 bg-gray-800 rounded-full ml-2"></div>
                        <div className="w-5 h-5 bg-slate-900 rounded-full ml-2"></div>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-light mr-7">Size</span>
                        <select className="border border-black px-2 py-1">
                            <option value="" selected>XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between 2xl:max-w-[50%]">
                    <div className="flex justify-center items-center mb-8">
                        <svg onClick={() => setQuantityHandler('-')} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                        <div className="mx-4 border-2 px-4 py-2 border-emerald-600 rounded-lg">{quantity}</div>
                        <svg onClick={() => setQuantityHandler('+')} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </div>
                    <div className="py-2 px-4 mb-8 border-2 border-emerald-600 cursor-pointer hover:bg-emerald-600 hover:text-white duration-200">ADD TO CART</div>
                </div>
            </div>
        </div>
    )
}

export default Product