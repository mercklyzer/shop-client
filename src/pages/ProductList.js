import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Products from "../components/Products"
import { productsData } from "../data/productsData"
import sofasHeader from '../assets/sofas.jpeg'

const data = productsData

const ProductList = props => {
    const location = useLocation()
    const category = location.pathname.split("/")[3]
    // const [filters, setFilters] = useState({
    //     color: 'White',
    //     size: 'XS'
    // })
    // const [sort, setSort] = useState('newest')

    // const handleFilters = (e) => {
    //     setFilters((filters) => {
    //         return {
    //             ...filters,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    // useEffect(() => {
    //     console.log(filters);
    // }, [filters])

    return (
        <>
            <div className="h-[calc(80vh-6rem)] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${sofasHeader})`}}>
                <div className="h-full w-full opacity-30 bg-black"></div>    
            </div>
            
            <div className="section">
                <div className="text-left font-bold text-4xl mt-8 mb-8">{category}</div>

                {/* <Products category={category} filters={filters} order={sort} data={data} /> */}
            </div>
        </>
    )
}

export default ProductList