import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Products from "../components/Products"
import { productsData } from "../data/productsData"
import sofasHeader from '../assets/sofas.jpeg'
import axios from "axios";

const data = productsData

const ProductList = props => {
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/")[3]

    const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState()
    // const [filteredProducts, setFilteredProducts] = useState()

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)

            // move this to apiCalls.js
            try{
                const res = await axios.get(
                    category? 
                        `http://localhost:5000/products?category=${category}`
                        : "http://localhost:5000/products"
                )
                console.log(res);
                setProducts(res.data)
            }
            catch(err){
                console.log(err);
            }
            setIsLoading(false)            
        }

        getProducts()
    }, [category])

    const handleChangeCategory = (category) => {
        navigate(`/shop-client/products/${category}`)
    }

    return (
        <>
            <div className="h-[calc(80vh-6rem)] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${sofasHeader})`}}>
                <div className="h-full w-full opacity-30 bg-black"></div>    
            </div>

            <div className="section">
                <div className="text-left font-semibold text-zinc-700 text-3xl mt-8 mb-8 tracking-wider">{capitalize(category)}</div>
            </div>

            <div className="bg-zinc-100 mb-8">
                <div className="section flex justify-between items-center">
                    <select 
                        className={`bg-zinc-100 outline-none pr-12 py-2 focus:bg-zinc-100 font-semibold text-zinc-700`}
                        onChange={(e) => handleChangeCategory(e.target.value)}
                    >
                        <option className="text-zinc-500 font-semibold" value="pillows" selected={category === 'pillows'}>Pillows</option>
                        <option className="text-zinc-500 font-semibold" value="beds" selected={category === 'beds'}>Beds</option>
                        <option className="text-zinc-500 font-semibold" value="sofas" selected={category === 'sofas'}>Sofas</option>
                        <option className="text-zinc-500 font-semibold" value="chairs" selected={category === 'chairs'}>Chairs</option>
                        <option className="text-zinc-500 font-semibold" value="tables" selected={category === 'tables'}>Tables</option>
                    </select>
                    <select className={`bg-zinc-100 outline-none pr-12 py-2 focus:bg-zinc-100 font-semibold text-zinc-700`}>
                        <option className="text-zinc-500 font-semibold">Popular</option>
                        <option className="text-zinc-500 font-semibold">Price (low)</option>
                        <option className="text-zinc-500 font-semibold">Price (high)</option>
                    </select>
                </div>
            </div>

            <div className="section py-8">
                <Products data={products} isLoading={isLoading}/>
            </div>
        </>
    )
}

export default ProductList