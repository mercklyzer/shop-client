import React from "react"
import model from '../assets/model-2.png'

const Register = props => {
    return (
        <div className="p-2 bg-register-background w-[100vw] max-w-[100%] h-[100vh] bg-cover md:bg-contain bg-no-repeat bg-right flex justify-center items-center relative">
            <div className="overlay bg-white z-0"></div>
            <div className="w-[45rem] bg-white p-4 z-10 shadow-2xl rounded-md">
                <h2 className="text-left font-light text-2xl mb-4">CREATE AN ACCOUNT</h2>
                <form className="w-full">
                    <div className="grid grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 gap-4">
                        <input className="border border-slate-700 px-4 py-2" placeholder="first name" />
                        <input className="border border-slate-700 px-4 py-2" placeholder="last name" />
                        <input className="border border-slate-700 px-4 py-2" placeholder="username" />
                        <input className="border border-slate-700 px-4 py-2" placeholder="email" />
                        <input className="border border-slate-700 px-4 py-2" type="password" placeholder="password" />
                        <input className="border border-slate-700 px-4 py-2" type="password" placeholder="confirm password" />
                    </div>
                    <div className="text-xs text-gray-700 text-left mt-4">
                        By creating an account, I consent to the processing of my personal data in accordance with the
                        <span className="font-bold ml-1">PRIVACY POLICY</span>
                    </div>
                    <div className="flex">
                        <div className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 text-white mt-6 cursor-pointer">CREATE</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register