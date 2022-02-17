import React from "react"

const Product = ({image, id}) => {
    return (
        <div className={`w-full flex justify-center items-center bg-sky-100 p-4 max-h-64 relative`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-0 w-1 h-20 p-[20%] rounded-full"></div>
            <img className="object-contain w-full h-full z-10" src={image}/>
        </div>
    )
}

export default Product