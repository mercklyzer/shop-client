import React from "react"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Slider from "../components/Slider"
import { productsData } from "../data/productsData"

const data = productsData

const Home = props => {
    return (
        <>
            <Slider />
            <div className="px-2 py-2 sm:px-4 md:px-8">
                <Categories />
                <Products data={data} />
            </div>
        </>
    )
}

export default Home