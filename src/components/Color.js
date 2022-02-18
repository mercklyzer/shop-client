import React from "react"

const Color = props => {
    return (
        <div className={`w-5 h-5 ${props.color} rounded-full ${props.className}`}></div>
    )
}

export default Color