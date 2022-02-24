import React from "react"

const colorToStyle = (color) => {
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'White', 'Black', 'Brown', 'Pink']
    const styles = [
        'bg-red-600',
        'bg-orange-500',
        'bg-yellow-400',
        'bg-emerald-700',
        'bg-blue-700',
        'bg-indigo-600',
        'bg-violet-700',
        'bg-white',
        'bg-black',
        'bg-yellow-900',
        'bg-pink-500'
    ]

    let i = colors.findIndex(el => el === color)
    return styles[i]
}

const Color = props => {
    return (
        <div className={`w-5 h-5 ${colorToStyle(props.color)} rounded-full ${props.className}`}></div>
    )
}

export default Color