import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Products from "../components/Products"
import { productsData } from "../data/productsData"

const data = productsData

const ProductList = props => {
    const location = useLocation()
    const category = location.pathname.split("/")[3]
    const [filters, setFilters] = useState({
        color: 'white',
        size: 'xs'
    })
    const [sort, setSort] = useState('newest')

    const handleFilters = (e) => {
        setFilters((filters) => {
            return {
                ...filters,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        console.log(filters);
    }, [filters])

    return (
        <div className="section">
            <div className="text-left font-bold text-4xl mt-8 mb-8">DRESSES</div>
            <div className="flex flex-col items-start mb-6 md:flex-row md:justify-between md:items-start">
                <div className="mb-4 flex items-center md:mb-0"> 
                    <div className="text-lg font-semibold ">Filter Products</div>
                    <select name="color" className="mx-4 px-4 py-1 border border-black" onChange={handleFilters}>
                        <option value="" disabled>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select name="size" className="px-4 py-1 border border-black" onChange={handleFilters}>
                        <option value="" disabled>Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <div className="text-lg font-semibold">Sort Products</div>
                    <select className="ml-4 px-4 py-1 border border-black" onChange={(e) => setSort(e.target.value)}>
                        <option value="newest" selected>Newest</option>
                        <option value="asc">Price (ASC)</option>
                        <option value="desc">Price (DESC)</option>
                    </select>
                </div>
            </div>
            <Products category={category} filters={filters} order={sort} data={data} />
        </div>
    )
}

export default ProductList