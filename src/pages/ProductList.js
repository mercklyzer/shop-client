import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Products from "../components/Products"
import { productsData } from "../data/productsData"
import sofasHeader from '../assets/sofas.jpeg'

const data = productsData

const ProductList = props => {
    const location = useLocation()
    const category = location.pathname.split("/")[3]


    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1)
    }

    return (
        <>
            <div className="h-[calc(80vh-6rem)] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${sofasHeader})`}}>
                <div className="h-full w-full opacity-30 bg-black"></div>    
            </div>

            <div className="section py-8">
                <div className="text-left font-semibold text-zinc-700 text-3xl mt-8 mb-8 tracking-wider">{capitalize(category)}</div>
            </div>

            <div className="bg-zinc-100">
                <div className="section flex justify-between items-center">
                    <select className={`bg-zinc-100 outline-none pr-12 py-2 focus:bg-zinc-100 font-semibold text-zinc-700`}>
                        <option className="text-zinc-500 font-semibold">Pillows</option>
                        <option className="text-zinc-500 font-semibold">Beds</option>
                        <option className="text-zinc-500 font-semibold">Sofas</option>
                        <option className="text-zinc-500 font-semibold">Chairs</option>
                        <option className="text-zinc-500 font-semibold">Tables</option>
                    </select>
                    <select className={`bg-zinc-100 outline-none pr-12 py-2 focus:bg-zinc-100 font-semibold text-zinc-700`}>
                        <option className="text-zinc-500 font-semibold">Popular</option>
                        <option className="text-zinc-500 font-semibold">Price (low)</option>
                        <option className="text-zinc-500 font-semibold">Price (high)</option>
                    </select>
                </div>
            </div>

            <div className="section">
                <Products category={category} data={data} />
            </div>
        </>
    )
}

export default ProductList