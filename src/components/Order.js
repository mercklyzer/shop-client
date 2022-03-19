import React from "react";
import OrderProduct from "./OrderProduct";
import moment from 'moment'

const Order = ({data}) => {
    return (
        <div className="flex border rounded-lg mb-2 flex-col p-4 md:p-8">
            <div className="text-left w-full">
                <div className={`float-right ${data.status === 'Pending'? 'text-orange-500 bg-yellow-200':'text-emerald-700 bg-green-300'}  px-2 py-1 rounded-lg`}>{data.status}</div>
                <div className='font-bold text-orange-500'>{moment(data.updatedAt).format('LL')}</div>
                <div className="font-bold text-lg text-zinc-700">Order ID</div>
                <div className="ml-4 text-zinc-600 font-semibold text-sm">{data._id}</div>
                <div className="font-bold text-lg text-zinc-700">Deliver To</div>
                <div className="ml-4 text-zinc-600 font-semibold text-sm">{data.address}</div>
                <div className="font-bold text-lg text-zinc-700">Total</div>
                <div className="ml-4 text-zinc-600 font-semibold text-sm">${data.total}</div>
                <div className="font-bold text-lg text-zinc-700">Items</div>
            </div>

            {/* ORDER PRODUCT LIST COMPONENT */}

            {data.products.map((prod, i) => <OrderProduct title={prod.product.title} displayImg={prod.product.displayImg} quantity={prod.quantity} total={prod.total} key={i}/>)}



        </div>
    )
}

export default Order