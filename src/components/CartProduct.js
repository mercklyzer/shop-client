import React from "react"
import Color from "./Color"
import Quantity from "./Quantity"

const CartProduct = props => {
    return (
        <div className={`flex flex-col border-b-2 sm:flex-row sm:justify-between ${props.className}`}>
            <div className="flex">
                <img className="w-1/2 max-w-[290px] object-contain" src={'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'}/>
                <div className="flex flex-col items-start justify-center ml-2">
                    <div className="text-left mb-2">Product: Jessie THUNDER SHOES</div>
                    <div className="mb-2">ID: 93813718293</div>
                    <Color color="bg-black" className="mb-2"/>
                    <div>Size: 37.5</div>
                </div>
            </div>
            <div className="flex items-center justify-around mb-4 sm:flex-col sm:justify-center sm:items-center sm:mr-8">
                <Quantity />
                <div className="text-2xl sm:mt-4">$20</div>
            </div>
        </div>
    )
}

export default CartProduct