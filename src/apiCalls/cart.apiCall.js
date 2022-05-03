import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL

export const editCart = async (token, userId, updatedCart) => {

    try{
        const res = await axios.put(
            `${baseUrl}/carts/${userId}`,
            updatedCart,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        return [res.data, null]
    }
    catch(err){
        console.log(err.response);
        return [null, err.response]
    }

}