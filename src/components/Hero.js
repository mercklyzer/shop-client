import React from "react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Hero = ({setShopNow}) => {
    return (
        <div className="hidden sm:block h-[calc(80vh-6rem)]">

            <div className="h-full w-full flex items-center flex-row justify-center bg-slider-1 bg-cover bg-no-repeat bg-center">
                <div className="basis-1/2 section lg:p-24">
                    <div className="flex justify-start flex-col items-start">
                        <div className="font-medium text-white mb-8 flex  justify-center items-center">
                            <div className="text-6xl md:text-8xl mr-4"><span className="text-white drop-shadow-lg">LYZ</span></div>
                            <div className="text-4xl md:text-4xl text-white drop-shadow-lg">IDEAS</div>
                        </div>
                        <div className="text-xl md:text-2xl text-white">A haven for new beginnings.</div>
                        <div className="text-xl md:text-2xl text-white mb-24 text-left">Shop our new 2022 collection and get up to 50% off! This is a limited offer.</div>
                        <button 
                            onClick={() => setShopNow(true)}
                            className="bg-white px-2 py-1 md:px-4 md:py-2 text-md md:text-xl text-zinc-800 hover:bg-zinc-800 hover:text-white hover:bg-git-700 drop-shadow-xl rounded-sm duration-100">
                                Shop Now
                            </button>
                    </div>
                </div>
                <div className="basis-1/2"></div>
            </div>

        </div>
    )
}

export default Hero