import React from "react"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Hero from "../components/Hero"
import { productsData } from "../data/productsData"
import LatestArrivals from "../components/LatestArrivals"
import ShopWithUs from "../components/ShopWithUs"

const data = productsData

const Home = props => {
    return (
        <>
            <Hero />
            <div className="section">
                <LatestArrivals />
                <Categories />
                <ShopWithUs />
                <Products data={data} />
            </div>
        </>
    )
}

export default Home