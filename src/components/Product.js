import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Product = ({image, preview, id}) => {
    let navigate = useNavigate()
    const [imageSrc, setImageSrc] = useState(image)

    return (
        <div className={``}>
            <img className="object-contain w-full h-auto cursor-pointer" 
                src={imageSrc} 
                onMouseEnter={() => setImageSrc(preview)} 
                onMouseLeave={() => setImageSrc(image)}
                onClick={() => navigate(`/shop-client/product/${id}`)} 
            />
            <div className="text-left mt-4">
                <div className="text-sm font-semibold text-zinc-600">Dresden Sectional Sofa</div>
                <div className="text-sm font-bold text-orange-600">$4199</div>
                <div className="text-sm ">23 Sold</div>
            </div>
        </div>
    )
}

export default Product