import { useState } from "react"
import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import OrderSummary from "../components/OrderSummary"

const Orders = props => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="section w-full">
            <div className="text-3xl font-light my-4">YOUR ORDERS</div>

            <div className="flex border rounded-lg mb-2 flex-col p-8">
                <div className="text-left w-full">
                    <div className="float-right text-emerald-700 px-2 py-1 rounded-lg bg-green-300">Completed</div>
                    <div className="font-bold text-orange-500">12/12/2022</div>
                    <div className="font-bold text-lg text-zinc-700">Order ID</div>
                    <div className="ml-12 text-zinc-600 font-semibold">Ggh1231sdasd23123zzxcca2231</div>
                    <div className="font-bold text-lg text-zinc-700">Deliver To</div>
                    <div className="ml-12 text-zinc-600 font-semibold">B14 L5 HAMMER ST., KENSINGTON 22, LANCASTER NEW CITY, GEN. TRIAS, CAVITE</div>
                    <div className="font-bold text-lg text-zinc-700">Total</div>
                    <div className="ml-12 text-zinc-600 font-semibold">$6000</div>
                    <div className="font-bold text-lg text-zinc-700">Items</div>
                </div>

                <div className="py-4 flex">
                    <img
                        className="w-full h-auto max-w-[290px] object-contain px-4" 
                        src={cart.products[0].displayImg} 
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3 font-bold text-xl text-zinc-700">Ejy Bed</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">3 pcs</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">$6000</div>
                    </div>
                </div>

                <div className="py-4 flex">
                    <img
                        className="w-full h-auto max-w-[290px] object-contain px-4" 
                        src={cart.products[0].displayImg} 
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3 font-bold text-xl text-zinc-700">Ejy Bed</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">3 pcs</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">$6000</div>
                    </div>
                </div>



                {/* <div className="w-full">      */}
                    


                
                {/* {
                    cart.products.map(({_id, title, desc, displayImg, price, quantity, total}, i) => (
                        <CartProduct key={i} id={_id} title={title} description={desc} image={displayImg} price={price} quantity={quantity} total={total}/>
                    ))
                }                */}
                {/* </div> */}
            </div>

            <div className="flex border rounded-lg mb-2 flex-col p-8">
                <div className="text-left w-full">
                    <div className="float-right text-emerald-700 px-2 py-1 rounded-lg bg-green-300">Completed</div>
                    <div className="font-bold text-lg text-zinc-700">Order ID</div>
                    <div className="ml-12">Ggh1231sdasd23123zzxcca2231</div>
                    <div className="font-bold text-lg text-zinc-700">Deliver To</div>
                    <div className="ml-12">B14 L5 HAMMER ST., KENSINGTON 22, LANCASTER NEW CITY, GEN. TRIAS, CAVITE</div>
                    <div className="font-bold text-lg text-zinc-700">Total</div>
                    <div className="ml-12">$6000</div>
                    <div className="font-bold text-lg text-zinc-700">Items</div>
                </div>

                <div className="py-4 flex">
                    <img
                        className="w-full h-auto max-w-[290px] object-contain px-4" 
                        src={cart.products[0].displayImg} 
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3 font-bold text-xl text-zinc-700">Ejy Bed</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">3 pcs</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">$6000</div>
                    </div>
                </div>

                <div className="py-4 flex">
                    <img
                        className="w-full h-auto max-w-[290px] object-contain px-4" 
                        src={cart.products[0].displayImg} 
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3 font-bold text-xl text-zinc-700">Ejy Bed</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">3 pcs</div>
                        <div className="w-1/3 font-semibold text-xl text-zinc-700">$6000</div>
                    </div>
                </div>



                {/* <div className="w-full">      */}
                    


                
                {/* {
                    cart.products.map(({_id, title, desc, displayImg, price, quantity, total}, i) => (
                        <CartProduct key={i} id={_id} title={title} description={desc} image={displayImg} price={price} quantity={quantity} total={total}/>
                    ))
                }                */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Orders