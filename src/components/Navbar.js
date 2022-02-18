import React from "react"
import {useNavigate } from 'react-router-dom'

const Navbar = props => {
    let navigate = useNavigate()

    return (
        <nav className="flex h-8 sm:h-16 w-full px-2 py-6 sm:py-0 sm:px-4 md:px-16 border-2">
            <div className="hidden basis-1/2 sm:flex sm:basis-1/3 flex-start items-center">
                <div className="inline-block mr-2">EN</div>
                <div className="flex px-2 py-1 mr-8 border-2">
                    <input className="block focus:outline-none w-full" placeholder="Search"/>
                    <svg className="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <div className="basis-1/2 flex sm:basis-1/3 sm:justify-center items-center font-mono text-3xl font-bold tracking-tighter">
                <div className="cursor-pointer" onClick={() => navigate('/shop-client')}>LYZER.</div>
            </div>
            <div className="basis-1/2 flex sm:basis-1/3 md:basis-1/3 md:flex justify-end items-center mr-2">
                <div className="hidden md:block mr-6 cursor-pointer" onClick={() => navigate('/shop-client/signup')}>REGISTER</div>
                <div className="hidden md:block mr-6 cursor-pointer" onClick={() => navigate('/shop-client/login')}>SIGN IN</div>
                <div className="relative cursor-pointer" onClick={() => navigate('/shop-client/cart')}>
                    <div className="h-5 w-5 rounded-full bg-indigo-500 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white text-xs justify-center items-center flex">2</div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar