import React, { useState } from "react"
import { useSelector } from "react-redux"
import {useNavigate } from 'react-router-dom'

const Navbar = props => {
    let navigate = useNavigate()

    const [showDropdown, setShowDropdown] = useState(false)
    const handleDropdown = () => {
        setShowDropdown(val => !val)
        props.setShowOverlay(val => !val)
    }

    const cartQuantity = useSelector(state => state.cart.quantity)


    return (
        <nav className="flex h-12 sm:h-16 w-full pt-6 sm:pt-2 section items-center">
            <div className="hidden basis-1/2 md:flex md:basis-1/3 flex-start items-center">
                <div className="inline-block mr-4 h-6 w-6 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={require('../assets/ph.png')} />
                </div>
                <div className="flex px-2 py-1 border-2">
                    <input className="block focus:outline-none w-full" placeholder="Search"/>
                    <svg className="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <div className="basis-1/2 flex md:basis-1/3 md:justify-center items-center font-mono text-3xl font-bold tracking-tighter">
                <div className="cursor-pointer flex justify-center items-center" onClick={() => navigate('/shop-client')}>
                    <span className="font-semibold text-gray-800 text-3xl mr-2">LYZ</span>
                    <span className=" text-slate-700 font-light tracking-widest text-2xl">IDEAS</span>
                </div>
            </div>
            <div className="basis-1/2 flex md:basis-1/3 md:flex justify-end items-center mr-2">
                <div className="relative">
                    <div className={`absolute top-full right-0 bg-white ${showDropdown? 'px-4 py-2 sm:pt-6': 'p-0'} z-50 md:relative md:flex md: mr-4`}>
                        <div className={`${showDropdown? 'block' : 'hidden'} md:block cursor-pointer md:mr-4`} onClick={() => navigate('/shop-client/signup')}>REGISTER</div>
                        <div className={`${showDropdown? 'block' : 'hidden'} md:block cursor-pointer`} onClick={() => navigate('/shop-client/login')}>SIGN IN</div>
                    </div>
                    <svg className="w-6 h-6 mr-1 md:hidden" fill="none" onClick={handleDropdown} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className="relative cursor-pointer" onClick={() => navigate('/shop-client/cart')}>
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-slate-700 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white text-xs justify-center items-center flex">{cartQuantity}</div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar