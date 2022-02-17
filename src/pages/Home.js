import React from "react"
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Slider from "../components/Slider"

const Home = props => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <div className="px-2 py-2 sm:px-4 md:px-8">
                <Categories />
                <Products />
            </div>
        </>
    )
}

export default Home