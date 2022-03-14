import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = ({displayImg, previewImg, id}) => {
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
                onClick={() => navigate(`/shop-client/product/${id}`)} 
            />

            </div>
            <div className="text-left mt-4">
                <div className="text-sm font-semibold text-zinc-600">Dresden Sectional Sofa</div>
                <div className="text-sm font-bold text-orange-600">$4199</div>
                <div className="text-sm ">23 Sold</div>
            </div>
        </div>
    )
}

export default Product