import React from "react"
import Product from "./Product"

const Products = ({ isLoading, filters, order, data}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
                !isLoading &&
                data.map(({_id, title, price, sold, displayImg, previewImg}) => <Product key={_id} id={_id} title={title} price={price} sold={sold} displayImg={displayImg} previewImg={previewImg}/>)
            }
        </div>
    )
}

export default Products