import CartProduct from "../components/CartProduct"
import OrderSummary from "../components/OrderSummary"


const Cart = props => {
    return (
        <div className="section w-full">
            <div className="text-3xl font-light my-4">YOUR BAG</div>
            <div className="flex flex-col-reverse justify-between items-center">
                <div className="border-2 py-2 px-4 border-gray-800 text-gray-900 mt-2">CONTINUE SHOPPING</div>
                <div className="mb-2">
                    <div className="underline underline-offset-2">Shopping Bag (2)</div>
                    <div className="underline underline-offset-2">Your Wishlist (0)</div>
                </div>
                <div className="hidden border-2 py-2 px-4 border-gray-800 mb-2 bg-black text-white">CHECKOUT NOW</div>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/4">
                    <CartProduct />
                    <CartProduct />
                </div>

                <div className="lg:w-1/4">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Cart