import axios from "axios";
import React, { useEffect, useState } from "react"
import Product from "./Product"

const Products = ({category, filters, order}) => {
    // fetch the data here

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState()
    const [filteredProducts, setFilteredProducts] = useState()

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
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

    useEffect(() => {
        if(category && !isLoading){
            setFilteredProducts(
                products?.filter(item => Object.entries(filters)
                .every(([key, value]) => item[key].includes(value)))
                )
            console.log(filteredProducts);
        }
    }, [products, category, filters, isLoading])

    useEffect(() => {
        if(order === 'newest'){
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if(order === 'asc'){
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.pricec - b.price))
        }
        else if(order === 'asc'){
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [order])



    return (
        <div className="grid grid-rows-[8] gap-2 mt-2 sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3">
            {
                !isLoading?
                    (category?
                        filteredProducts?.map(({_id, img}) => <Product key={_id} id={_id} image={img}/>)
                        : products?.slice(0, 8).map(({_id, img}) => <Product key={_id} id={_id} image={img} />))
                : <div>Fetching data...</div>
            }
        </div>
    )
}

export default Products