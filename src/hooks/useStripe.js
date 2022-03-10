import axios from "axios";
import { useEffect, useState } from "react";

// get this key from API
const KEY = "pk_test_51H6jd9JIK2H5ZSdWPYvOnwDZOAWhCMSlbKPBgHLbaY1u3ngE3xSGYNqdyuJQmrGLN0K9jJoVxZcljr7GvfbtkGCT00InJsbfUM"

const useStripe = () => {
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

    return [KEY, onToken]
}


export default useStripe