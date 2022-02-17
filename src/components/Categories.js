import React from "react"
import Category from "./Category"

const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
]

const Categories = props => {
    return <div className="grid grid-rows-3 gap-2 sm:grid-rows-1 sm:grid-cols-3 sm:gap-4">
    {categories.map(({id, img, title}) => <Category key={id} image={img} title={title} />)}    
    </div>
    
}

export default Categories