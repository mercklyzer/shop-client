import React, { useRef, useState } from "react"
import Categories from "../components/Categories"
import Hero from "../components/Hero"
import { productsData } from "../data/productsData"
import LatestArrivals from "../components/LatestArrivals"
import ShopWithUs from "../components/ShopWithUs"

const data = productsData

const Home = props => {
    const [shopNow, setShopNow] = useState(false)
    return (
        <>
            <Hero setShopNow={setShopNow}/>
            <div className="section">
                <LatestArrivals shopNow={shopNow} setShopNow={setShopNow}/>
                <Categories />
                <ShopWithUs />
            </div>
        </>
    )
}

export default Home