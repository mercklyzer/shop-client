import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    console.log("logging in");



    try{
        const res = await axios.post(
            "http://localhost:5000/users/login",
            user
        )
        dispatch(loginSuccess(res.data))
    }
    catch(err){
        dispatch(loginFailure({error: err.response.data.error}))
    }
}