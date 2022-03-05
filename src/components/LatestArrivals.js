import React from "react";

const LatestArrivals = props => {
    return (
        <div className="py-16">
            <div className="text-left text-3xl text-zinc-800 mb-24">Latest Arrivals</div>
            <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-12 mb-24">
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-1.webp')} />
                    <div className="text-md text-zinc-700 font-medium">Ophelia Pillow</div>
                </div>
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-2.jpg')} />
                    <div className="text-md text-zinc-700 font-medium">Lyzer Bed</div>
                </div>
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-2.jpg')} />
                    <div className="text-md text-zinc-700 font-medium">Lyzer Bed</div>
                </div>
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-1.webp')} />
                    <div className="text-md text-zinc-700 font-medium">Ophelia Pillow</div>
                </div>
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-1.webp')} />
                    <div className="text-md text-zinc-700 font-medium">Ophelia Pillow</div>
                </div>
                <div className="">
                    <img className="mb-2 object-cover minh-48 w-auto h-full" src={require('../assets/arrival-2.jpg')} />
                    <div className="text-md text-zinc-700 font-medium">Lyzer Bed</div>
                </div>

            </div>
        </div>
    )
}

export default LatestArrivals