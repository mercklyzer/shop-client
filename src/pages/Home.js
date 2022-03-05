import React from "react"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Hero from "../components/Hero"
import { productsData } from "../data/productsData"

const data = productsData

const Home = props => {
    return (
        <>
            <Hero />
            <div className="section">
                <Categories />
                <Products data={data} />
            </div>
        </>
    )
}

export default Home