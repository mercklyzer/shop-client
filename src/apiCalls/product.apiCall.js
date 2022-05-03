import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL

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

export const getProduct = async (token, id) => {
    try{
        const res = await axios.get(
            `${baseUrl}/products/find/${id}`,
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

export const getProducts = async (token, category) => {
    try{
        const res = await axios.get(
            category? 
                `${baseUrl}/products?category=${category}`
                : `${baseUrl}/products`,
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
