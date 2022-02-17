import React from "react"

const Category = props => {
    return (
        <div className={`bg-cover h-72 sm:h-96 md:h-[40rem] w-full flex justify-center items-center flex-col relative`} style={{backgroundImage: `url(${props.image}`}}>
            <div className="overlay"></div>
            <div className="text-white text-3xl font-bold mb-4 z-10">{props.title}</div>
            <div className="bg-white text-stone-600 py-1 px-3 z-10 cursor-pointer">SHOP NOW</div>
        </div>
    )
}

export default Category