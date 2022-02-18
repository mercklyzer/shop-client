import React from "react"

const OrderSummary = props => {
    return (
        <div className="border-2 p-3 rounded-md">
            <div className="text-3xl text-left font-light mb-8">ORDER SUMMARY</div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Subtotal</div>
                <div className="md:text-lg">$80</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Estimated Shipping</div>
                <div className="md:text-lg">$80</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Shipping Discount</div>
                <div className="md:text-lg">$80</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="font-semibold text-xl md:text-2xl">Total</div>
                <div className="font-semibold text-xl md:text-2xl">$80</div>
            </div>

            <div className="border-2 py-2 px-4 border-gray-800 lg:mb-52 bg-black text-white cursor-pointer">CHECKOUT NOW</div>
        </div>
    )
}

export default OrderSummary