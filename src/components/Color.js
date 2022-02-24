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
    const borderColor = props.color === 'Black'? 'border-red-500' : 'border-black'

    return (
        <div 
            onClick={() => props.setSelectedColor(props.color)} 
            className={`flex justify-center items-center ${props.className}`}
        >
            <div className={`w-5 h-5 ${colorToStyle(props.color)} ${props.selected? `border-2 ${borderColor}`: ''} rounded-full `}></div>
        </div>
    )
}

export default Color