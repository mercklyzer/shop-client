import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = ({title, price, sold, displayImg, previewImg, id}) => {
    let navigate = useNavigate()
    const [imageSrc, setImageSrc] = useState(displayImg)

    return (
        <div className={``}>
            <div className="">
            <LazyLoadImage
                className="object-contain w-full h-auto cursor-pointer" 
                alt={"Product"}
                src={imageSrc}
                effect={"blur"}
                onMouseEnter={() => setImageSrc(previewImg)} 
                onMouseLeave={() => setImageSrc(displayImg)}
                onClick={() => navigate(`/product/${id}`)} 
            />

            </div>
            <div className="text-left mt-4">
                <div className="text-sm font-semibold text-zinc-600">{title}</div>
                <div className="text-sm font-bold text-orange-600">${price}</div>
                <div className="text-sm ">{sold} Sold</div>
            </div>
        </div>
    )
}

export default Product