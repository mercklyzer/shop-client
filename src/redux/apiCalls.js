import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await axios.post(
            "http://localhost:5000/users/login",
            user
        )
        console.log(res.data);
        dispatch(loginSuccess(res.data))
    }
    catch(err){
        dispatch(loginFailure())
    }
}