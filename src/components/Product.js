import React from "react"

const Product = ({image, id}) => {
    return (
        <div className={`w-full flex justify-center items-center bg-sky-100 p-4 max-h-64 relative cursor-pointer group`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-0 w-1 h-20 p-[20%] rounded-full"></div>
            <img className="object-contain w-full h-full z-10" src={image}/>
            <div className="overlay opacity-0 group-hover:opacity-20 z-20 duration-150"></div>
            <div className="hidden group-hover:flex absolute top-0 left-0  w-full h-full justify-center items-center z-30">
                <div className="rounded-full bg-white p-2 hover:scale-125 hover:bg-sky-100 duration-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div className="rounded-full bg-white p-2 mx-3 hover:scale-125 hover:bg-sky-100 duration-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <div className="rounded-full bg-white p-2 hover:scale-125 hover:bg-sky-100 duration-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Product