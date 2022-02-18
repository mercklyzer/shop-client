import React from "react"
import Products from "../components/Products"
import { productsData } from "../data/productsData"

const data = productsData

const ProductList = props => {
    return (
        <div className="section">
            <div className="text-left font-bold text-4xl mt-8 mb-8">DRESSES</div>
            <div className="flex flex-col items-start mb-6 md:flex-row md:justify-between md:items-start">
                <div className="mb-4 flex items-center md:mb-0"> 
                    <div className="text-lg font-semibold ">Filter Products</div>
                    <select className="mx-4 px-4 py-1 border border-black">
                        <option value="" disabled selected>Color</option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Red</option>
                        <option value="">Blue</option>
                        <option value="">Yellow</option>
                        <option value="">Green</option>
                    </select>
                    <select className="px-4 py-1 border border-black">
                        <option value="" disabled selected>Size</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <div className="text-lg font-semibold">Sort Products</div>
                    <select className="ml-4 px-4 py-1 border border-black">
                        <option value="" selected>Newest</option>
                        <option value="">Price (ASC)</option>
                        <option value="">Price (DESC)</option>
                    </select>
                </div>
            </div>
            <Products data={data} />
        </div>
    )
}

export default ProductList