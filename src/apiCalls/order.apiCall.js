import axios from "axios"
const baseUrl = "http://localhost:5000"

export const getOrders = async (userId, token, setIsLoading) => {
    console.log(userId);
    setIsLoading(true)

    try{
        const res = await axios.get(
            `${baseUrl}/orders/find/${userId}`,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        setIsLoading(false)
        return res.data
    }
    catch(err){
        console.log(err.response);
        setIsLoading(false)
        return err.response
    }
}