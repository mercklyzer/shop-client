import axios from "axios";
import React, { useEffect, useState } from "react"
import Product from "./Product"

const Products = ({category, filters, order}) => {
    // fetch the data here

    const [products, setProducts] = useState()
    const [filteredProducts, setFilteredProducts] = useState()

    useEffect(() => {
        const getProducts = async () => {
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
        }

        getProducts()
    }, [category])


    return (
        <div className="grid grid-rows-[8] gap-2 mt-2 sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3">
            {products &&
                products.map(({id, img}) => <Product key={id} id={id} image={img}/>)
            }
            {/* <div className="hidden w-full sm:flex md:col-span-2 justify-center items-center bg-sky-100 p-4 max-h-64 relative">
                <span className="text-gray-700 text-6xl font-extrabold">BE CLASSY!</span>
            </div> */}
        </div>
    )
}

export default Products