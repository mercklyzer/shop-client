import React from "react"
import { useNavigate } from "react-router-dom"

const Category = props => {
    const category = props.title.toLowerCase()
    let navigate = useNavigate()

    return (
        <div className={`bg-bottom bg-cover h-72 sm:h-96 md:h-[40rem] w-full flex justify-center items-center flex-col relative ${props.feature? 'sm:row-span-2 sm:h-full md:h-full': ''}`} style={{backgroundImage: `url(${props.image}`}}>
            <div className="overlay"></div>
            <div className="text-white text-3xl font-bold mb-4 z-10">{props.title}</div>
            <div className="bg-white text-stone-600 py-1 px-3 z-10 cursor-pointer" onClick={() => navigate(`/products/${category}`)}>SHOP NOW</div>
        </div>
    )
}

export default Category