import React from "react";

const Newsletter = props => {
    return (
        <div className="bg-pink-100 flex flex-col justify-center items-center px-2 py-16 md:p-32">
            <h1 className="text-4xl mb-4 font-bold md:text-6xl md:mb-8">Newsletter</h1>
            <h6 className="text-md md:text-2xl text-gray-900 font-normal mb-6">Get timely updates from your favorite products.</h6>
            <div className="flex">
                <input className="px-4 py-1 border border-gray-300 w-48 sm:w-64 md:w-98" placeholder="Your email"/>
                <div className="flex justify-center items-center bg-emerald-700 px-4 py-1 md:px-8 md:py-2">
                    <svg className=" w-4 h-4 md:w-6 md:h-6 text-white rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Newsletter