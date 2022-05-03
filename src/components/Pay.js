import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE_KEY

const Pay = props => {
    const [stripeToken, setStripeToken] = useState(null)
    const products = useSelector(state => state.cart.products)

    
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post(
                    `${process.env.BASE_URL}/orders`,
                    {
                        tokenId: stripeToken.id,
                        products: products.map(product => ({productId: product.id, quantity: product.quantity})),
                    }
                )
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
        }

        if(stripeToken){
            makeRequest()
        }

    }, [stripeToken])

    return (
        <div className="flex justify-center items-center">
            <StripeCheckout
                name="Lyzer Shop"
                description="Your total is $20"
                billingAddress
                shippingAddress
                amount={2000} //equal to 20 dollars
                token={onToken}
                stripeKey={KEY}
            >
                <div className="px-4 py-2 bg-emerald-800 text-white font-bold cursor-pointer">PAY NOW</div>
            </StripeCheckout>
        </div>
    )
}

export default Pay