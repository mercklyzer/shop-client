import axios from "axios"
const baseUrl = "http://localhost:5000"

export const getNewProducts = async (token) => {
    try{
        const res = await axios.get(
            `${baseUrl}/products?new=true`,
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