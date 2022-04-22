import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate } from 'react-router-dom'
import usePrevious from "../hooks/usePrevious"
import { useUser } from "../hooks/useUser"

const Navbar = props => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, token, role] = useUser()

    const onLogout = () => {
        dispatch({type: 'USER_LOGOUT'})
        navigate('/')
    }

    const [showUserDropdown, setShowUserDropdown] = useState(false)
    const handleUserDropdown = () => {
        setShowUserDropdown(val => !val)
        props.setShowOverlay(val => !val)
    }

    const [showCartPopup, setShowCartPopup] = useState(false)

    const cartQuantity = useSelector(state => state.cart.quantity)
    const prevCartQuantity = usePrevious(cartQuantity)

    useEffect(() => {
        if(cartQuantity > prevCartQuantity){
            setShowCartPopup(true)
        }
    }, [cartQuantity])

    useEffect(() => {
        const hideCart = () => setShowCartPopup(false)

        if(showCartPopup){
            setTimeout(hideCart, [5000])
        }

        return () => {
            clearTimeout(hideCart)
        }
    }, [showCartPopup])


    return (
        <nav className="flex h-12 sm:h-16 w-full pt-6 sm:pt-2 section items-center bg-white shadow-md">
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
                <div className="cursor-pointer flex justify-center items-center" onClick={() => navigate('/')}>
                    <span className="font-semibold text-orange-500 text-3xl mr-2">LYZ</span>
                    <span className=" text-slate-700 font-light tracking-widest text-2xl">IDEAS</span>
                </div>
            </div>
            <div className="basis-1/2 flex md:basis-1/3 md:flex justify-end items-center mr-2">
                <div className="relative">
                    <div className={`absolute top-full right-0 bg-white ${showUserDropdown? 'px-4 py-2 sm:pt-6': 'p-0'} z-50 md:relative md:flex md: mr-4`}>
                        {!user && <div className={`${showUserDropdown? 'block' : 'hidden'} md:block cursor-pointer md:mr-4`} onClick={() => navigate('/signup')}>REGISTER</div>}
                        {!user && <div className={`${showUserDropdown? 'block' : 'hidden'} md:block cursor-pointer`} onClick={() => navigate('/login')}>SIGN IN</div>}
                        {user && <div className={`${showUserDropdown? 'block' : 'hidden'} md:block cursor-pointer`} onClick={onLogout}>LOGOUT</div>}
                    </div>
                    <svg className="w-6 h-6 mr-1 md:hidden cursor-pointer" fill="none" onClick={handleUserDropdown} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className={`relative ${user? '':'hidden'}`}>
                    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                        <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-orange-500 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white text-xs justify-center items-center flex">{cartQuantity}</div>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div className={`absolute right-0 flex flex-col items-end ${showCartPopup? '' : 'hidden'}`}>
                        <div className="w-4 h-4 rotate-45 bg-white  border-l border-t z-10"></div>
                        <div className="bg-white text-zinc-600 font-medium top-full right-0 p-4 overflow-hidden border shadow-lg whitespace-nowrap -mt-2 -mr-4">
                            Item added to cart!
                        </div>
                    </div>
                </div>
                <div className="relative ml-2">
                    <div className={`relative cursor-pointer ${user? '':'hidden'}`} onClick={() => navigate('/orders')}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar