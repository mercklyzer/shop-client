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
            <div className="section">
                <Categories />
                <Products data={data} />
            </div>
        </>
    )
}

export default Home