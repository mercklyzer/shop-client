import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// get this key from API
const KEY = "pk_test_51H6jd9JIK2H5ZSdWPYvOnwDZOAWhCMSlbKPBgHLbaY1u3ngE3xSGYNqdyuJQmrGLN0K9jJoVxZcljr7GvfbtkGCT00InJsbfUM"
const baseUrl = "https://lyz-ideas-api.herokuapp.com"

const useStripe = (onSuccess) => {
    const navigate = useNavigate()

    const [stripeToken, setStripeToken] = useState(null)
    const userToken = useSelector(state => state.user.token)
    const products = useSelector(state => state.cart.products)

    
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                console.log(userToken);
                const res = await axios.post(
                    `${baseUrl}/orders`,
                    {
                        tokenId: stripeToken.id,
                        products: products.map(product => ({productId: product._id, quantity: product.quantity})),
                    },{
                        headers: {
                            Authorization: userToken
                        }
                    }
                )
                console.log(res.data);
                onSuccess()

            }
            catch(err){
                console.log(err.response);
            }
        }

        if(stripeToken){
            makeRequest()
        }

    }, [stripeToken])

    return [KEY, onToken]
}


export default useStripe