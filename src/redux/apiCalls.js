import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

const baseUrl = "http://localhost:5000"

export const login = async (dispatch, navigate, user) => {
    dispatch(loginStart())

    try{
        const res = await axios.post(
            `${baseUrl}/users/login`,
            user
        )
        dispatch(loginSuccess(res.data.user))
        navigate('/shop-client/')
    }
    catch(err){
        dispatch(loginFailure({error: err.response.data.error}))
    }
}