import React from "react"

const Category = props => {
    return (
        <div className={`grid grid-rows-3 gap-5 bg-cover h-64 w-full`} style={{backgroundImage: `url(${props.image}`}}>
            <div></div>
            <div>SHOP NOW</div>
        </div>
    )
}

export default Category