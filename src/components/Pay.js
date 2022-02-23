import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51H6jd9JIK2H5ZSdWPYvOnwDZOAWhCMSlbKPBgHLbaY1u3ngE3xSGYNqdyuJQmrGLN0K9jJoVxZcljr7GvfbtkGCT00InJsbfUM"

const Pay = props => {
    const [stripeToken, setStripeToken] = useState(null)
    
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post(
                    "http://localhost:5000/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
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