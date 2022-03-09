import React from "react";

const Footer = props => {
    return (
        <div className="section bg-zinc-800 py-16 md:py-32">
            <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 ">
                <div className="">
                    <div className="text-center md:text-left text-white font-semibold text-2xl mb-2 md:mb-8">Contact Us</div>
                    <div className="flex items-center justify-center md:justify-start mb-4">
                        <svg className="w-8 h-8 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <div className="ml-4 text-white">+63 929 447 2136</div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mb-4">
                        <svg className="w-8 h-8 shrink-0 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                        <div className="ml-4 text-white truncate">mercklyzer@gmail.com</div>
                    </div>
                </div>

                <div className="">
                    <div className="text-center md:text-left text-white font-semibold text-2xl mb-2 md:mb-8">Discover</div>
                    <div className="flex items-center justify-center md:justify-start mb-1 md:mb-4">
                        <div className="text-white cursor-pointer">Our Story</div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mb-1 md:mb-4">
                        <div className="text-white cursor-pointer">Our Vision</div>
                    </div>
                </div>

                <div className="">
                    <div className="text-center md:text-left text-white font-semibold text-2xl mb-2 md:mb-8">Help</div>
                    <div className="flex items-center justify-center md:justify-start mb-1 md:mb-4">
                        <div className="text-white cursor-pointer">FAQ</div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mb-1 md:mb-4">
                        <div className="text-white cursor-pointer">Store Policy</div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mb-1 md:mb-4">
                        <div className="text-white cursor-pointer">Privacy Policy</div>
                    </div>
                </div>

                <div className="">
                    <div className="text-center md:text-left text-white font-semibold text-2xl mb-2 md:mb-8">Newsletter</div>
                    <div className="text-center md:text-left text-white mb-4">
                        Join our mailing list. Get promotions & news.
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <input className="py-2 px-2 outline-none w-full mr-4 mb-2 lg:mb-0 text-center lg:text-left" type="email" placeholder="email" />
                        <button className="bg-orange-400 py-2 px-4 font-semibold rounded-sm hover:bg-orange-700 hover:text-white duration-100">Subscribe</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer