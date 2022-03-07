import axios from "axios";
import React, { useEffect, useState } from "react"
import Product from "./Product"

const Products = ({category, filters, order, data}) => {
    // fetch the data here

    // const [isLoading, setIsLoading] = useState(true)
    // const [products, setProducts] = useState()
    // const [filteredProducts, setFilteredProducts] = useState()

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setIsLoading(true)
    //         try{
    //             const res = await axios.get(
    //                 category? 
    //                     `http://localhost:5000/products?category=${category}`
    //                     : "http://localhost:5000/products"
    //             )
    //             console.log(res);
    //             setProducts(res.data)
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //         setIsLoading(false)            
    //     }

    //     getProducts()
    // }, [category])

    // useEffect(() => {
    //     if(category && !isLoading){
    //         setFilteredProducts(
    //             products?.filter(item => Object.entries(filters)
    //             .every(([key, value]) => item[key].includes(value)))
    //             )
    //         console.log(filteredProducts);
    //     }
    // }, [products, category, filters, isLoading])


    return (
        <div className="grid grid-cols-4 gap-10">
            {

                data.map(({id, img}) => <Product key={id} id={id} image={img}/>)

            }
        </div>
    )
}

export default Products