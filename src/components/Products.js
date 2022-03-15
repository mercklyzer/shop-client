import axios from "axios";
import React, { useEffect, useState } from "react"
import Product from "./Product"

const Products = ({ isLoading, filters, order, data}) => {

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
                !isLoading &&
                data.map(({_id, displayImg, previewImg}) => <Product key={_id} id={_id} displayImg={displayImg} previewImg={previewImg}/>)
            }
        </div>
    )
}

export default Products