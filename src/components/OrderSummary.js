import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import useStripe from "../hooks/useStripe"
import { resetCart } from "../redux/cartRedux"

const OrderSummary = props => {
    const total = useSelector(state => state.cart.total)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSuccess = () => {
        dispatch(resetCart())
        navigate('/orders')
    }

    const [key, onToken] = useStripe(onSuccess)

    return (
        <div className="border-2 p-3 rounded-md">
            <div className="text-3xl text-left font-light mb-8">ORDER SUMMARY</div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Subtotal</div>
                <div className="md:text-lg">${total}</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Estimated Shipping</div>
                <div className="md:text-lg">$0</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="md:text-lg">Shipping Discount</div>
                <div className="md:text-lg">$0</div>
            </div>
            <div className="flex justify-between items-center mb-2 md:mb-6">
                <div className="font-semibold text-xl md:text-2xl">Total</div>
                <div className="font-semibold text-xl md:text-2xl">${total}</div>
            </div>

            <StripeCheckout
                name="LYZ Ideas"
                description={`Your total is $${total}`}
                billingAddress
                shippingAddress
                amount={total * 100}
                token={onToken}
                stripeKey={key}
                disabled={total === 0}
            >
                <div className={`border-2 py-2 px-4 border-gray-800 lg:mb-52 bg-black text-white cursor-pointer ${total === 0? 'opacity-60 cursor-not-allowed' : ''}`}>CHECKOUT NOW</div>
                <div className="font-semibold text-sm text-orange-500">For testers, use the card <br /> "4242 4242 4242 4242".</div>
            </StripeCheckout>
        </div>
    )
}

export default OrderSummary