import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import { signup } from "../apiCalls/user.apiCall"

const Signup = props => {
    const [signupForm, setSignupForm, clearSignupForm] = useForm({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isFetchingSignup, errorSignup, errorMessageSignup} = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(dispatch, navigate, signupForm)
        clearSignupForm()
    }


    return (
        <div className="p-2 bg-register-background w-[100vw] max-w-[100%] h-[100vh] bg-cover md:bg-contain bg-no-repeat bg-right flex justify-center items-center relative">
            <div className="overlay bg-white z-0"></div>
            <div className="w-[45rem] bg-white p-4 z-10 shadow-2xl rounded-md">
                <h2 className="text-left font-light text-2xl mb-4">CREATE AN ACCOUNT</h2>
                <form className="w-full">
                    <div className="grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 gap-4">
                        <input className="border border-slate-700 px-4 py-2" type="text" value={signupForm.firstName} name="firstName" onChange={(e) => setSignupForm(e)} placeholder="first name" />
                        <input className="border border-slate-700 px-4 py-2" type="text" value={signupForm.lastName} name="lastName" onChange={(e) => setSignupForm(e)} placeholder="last name" />
                        <input className="border border-slate-700 px-4 py-2" type="text" value={signupForm.username} name="username" onChange={(e) => setSignupForm(e)} placeholder="username" />
                        <input className="border border-slate-700 px-4 py-2" type="email" value={signupForm.email} name="email" onChange={(e) => setSignupForm(e)} placeholder="email" />
                        <input className="border border-slate-700 px-4 py-2" value={signupForm.password} name="password" onChange={(e) => setSignupForm(e)} type="password" placeholder="password" />
                        <input className="border border-slate-700 px-4 py-2" value={signupForm.confirmPassword} name="confirmPassword" onChange={(e) => setSignupForm(e)} type="password" placeholder="confirm password" />
                    </div>
                    <div className="text-xs text-gray-700 text-left mt-4">
                        By creating an account, I consent to the processing of my personal data in accordance with the
                        <span className="font-bold ml-1">PRIVACY POLICY</span>
                    </div>
                    <div className="flex">
                        <button 
                            type="submit"
                            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 text-white mt-6 cursor-pointer" 
                            disabled={isFetchingSignup}
                            onClick={handleSubmit}
                        >CREATE</button>
                    </div>
                    {errorSignup && <div className="text-left text-sm text-red-600 mt-4">{errorMessageSignup}</div>}
                </form>
            </div>
        </div>
    )
}

export default Signup