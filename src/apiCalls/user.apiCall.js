import axios from "axios"
import {loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure} from "../redux/userRedux"

const baseUrl = "http://localhost:5000"

export const login = async (dispatch, navigate, user) => {
    dispatch(loginStart())

    try{
        const res = await axios.post(
            `${baseUrl}/users/login`,
            user
        )
        dispatch(loginSuccess(res.data))
        navigate('/shop-client/')
    }
    catch(err){
        dispatch(loginFailure({error: err.response?.data?.error}))
    }
}

export const signup = async (dispatch, navigate, user) => {
    dispatch(signupStart())

    try{
        const res = await axios.post(
            `${baseUrl}/users/register`,
            user
        )
        dispatch(signupSuccess(res.data))
        navigate('/shop-client/')
    }
    catch(err){
        console.log(err.response);
        dispatch(signupFailure({error: err.response?.data?.error}))
    }
}