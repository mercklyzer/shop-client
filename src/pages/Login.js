import React from "react"
import model from '../assets/model-3.png'


const Login = props => {
    return (
        <div className="p-2 bg-login-background w-[100vw] max-w-[100%] h-[100vh] bg-cover md:bg-contain bg-no-repeat bg-right flex justify-center items-center relative">
            <div className="overlay bg-white z-0"></div>
            <div className="w-[30rem] bg-white p-4 z-10 shadow-2xl rounded-md">
                <h2 className="text-left font-light text-2xl mb-4">SIGN IN</h2>
                <form className="w-full">
                    <div className="grid grid-rows-2 grid-cols-1 gap-4">
                        <input className="border border-slate-700 px-4 py-2" placeholder="username" />
                        <input className="border border-slate-700 px-4 py-2" placeholder="password" />
                    </div>
                    <div className="flex">
                        <div className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white mt-6 cursor-pointer">LOGIN</div>
                    </div>
                    <div className="text-left text-xs underline cursor-pointer mt-4">DO NOT REMEMBER THE PASSWORD?</div>
                    <div className="text-left text-xs underline cursor-pointer mt-2">CREATE A NEW ACCOUNT</div>
                </form>
            </div>
        </div>
    )
}

export default Login