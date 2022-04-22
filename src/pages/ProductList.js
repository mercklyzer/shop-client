import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Products from "../components/Products"
import sofasHeader from '../assets/sofas.jpeg'
import tablesHeader from '../assets/tables.jpeg'
import pillowsHeader from '../assets/pillows.jpeg'
import chairsHeader from '../assets/chairs.jpeg'
import bedsHeader from '../assets/beds.jpeg'
import { getProducts } from "../apiCalls/product.apiCall"
import { RotatingLines } from "react-loader-spinner"

const getHeaderImg = (category) => {
    const headerImgs = {
        sofas: sofasHeader,
        tables: tablesHeader,
        pillows: pillowsHeader,
        chairs: chairsHeader,
        beds: bedsHeader,
        
    }
    return headerImgs[category]
}

const ProductList = props => {
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/")[2]

    const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [products, setProducts] = useState()
    const [headerImg, setHeaderImg] = useState(() => getHeaderImg(category))

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            const [data, err] = await getProducts(null, category)
            if(data){
                console.log(data);
                setProducts(data)
            }
            if(err){
                setIsError(true)
            }
            setIsLoading(false)            
        }

        fetchProducts()
        setHeaderImg(getHeaderImg(category))
    }, [category])

    const handleChangeCategory = (category) => {
        navigate(`/products/${category}`)
    }

    return (
        <>
            <div className="h-[calc(80vh-6rem)] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${headerImg})`}}>
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
                {isLoading && <div className="py-52 flex justify-center w-full"><RotatingLines width="40"/></div>}
                {products && products.length !== 0 && <Products data={products} isLoading={isLoading}/>}
                {products && products.length === 0 && <div>No products yet. We are working on it.</div>}
            </div>
        </>
    )
}

export default ProductList