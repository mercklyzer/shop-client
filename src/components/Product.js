import React from "react"
import { useNavigate } from "react-router-dom"

const Product = ({image, id}) => {
    let navigate = useNavigate()

    return (
        <div className={``}>
            <img className="object-contain" src={image}/>
            <div className="text-left">
                <div className="text-sm font-semibold text-zinc-600">Dresden Sectional Sofa</div>
                <div className="text-sm font-bold text-zinc-700">$4199</div>
                <div className="text-sm ">23 Sold</div>
            </div>
        </div>
    )
}

export default Product