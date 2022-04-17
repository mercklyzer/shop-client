import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import model from '../assets/model-3.png'
import useForm from "../hooks/useForm"
import { login } from "../apiCalls/user.apiCall"


const Login = props => {
    const [loginForm, setLoginForm, clearLoginForm] = useForm({
        username: "",
        password: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isFetchingLogin, errorLogin, errorMessageLogin} = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, navigate, loginForm)
        clearLoginForm()
    }

    return (
        <div className="p-2 bg-login-background w-[100vw] max-w-[100%] h-[100vh] bg-cover md:bg-contain bg-no-repeat bg-right flex justify-center items-center relative">
            <div className="overlay bg-white z-0"></div>
            <div className="w-[30rem] bg-white p-4 z-10 shadow-2xl rounded-md">
                <h2 className="text-left font-light text-2xl mb-4">SIGN IN</h2>
                <form className="w-full">
                    <div className="grid grid-rows-2 grid-cols-1 gap-4">
                        <input className="border border-slate-700 px-4 py-2" name="username" value={loginForm.username} type="text" placeholder="username" onChange={(e) => setLoginForm(e)}/>
                        <input className="border border-slate-700 px-4 py-2" name="password" value={loginForm.password} type="password" placeholder="password" onChange={(e) => setLoginForm(e)}/>
                    </div>
                    <div className="flex">
                        <button 
                            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 text-white mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-auto disabled:transform-none disabled:transition-none disabled:text-white select-none" 
                            onClick={handleSubmit}
                            disabled={isFetchingLogin}
                        >LOGIN</button>
                    </div>
                    {errorLogin && <div className="text-left text-sm text-red-600 mt-4">{errorMessageLogin}</div>}
                    <div className="text-left text-xs underline cursor-pointer mt-4">DO NOT REMEMBER THE PASSWORD?</div>
                    <div className="text-left text-xs underline cursor-pointer mt-2">CREATE A NEW ACCOUNT</div>
                </form>
            </div>
        </div>
    )
}

export default Login