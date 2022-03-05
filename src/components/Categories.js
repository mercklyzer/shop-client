import React from "react"
import Category from "./Category"

import pillows from '../assets/pillows.jpeg'
import beds from '../assets/beds.jpeg'
import chairs from '../assets/chairs.jpeg'
import sofas from '../assets/sofas.jpeg'
import tables from '../assets/tables.jpeg'

const categories = [
    {
      id: 1,
      img: pillows,
      title: "PILLOWS",
    },
    {
      id: 2,
      img: beds,
      title: "BEDS",
    },
    {
      id: 3,
      img: sofas,
      title: "SOFAS",
      feature: true
    },
    {
      id: 4,
      img: chairs,
      title: "CHAIRS",
    },
    {
      id: 5,
      img: tables,
      title: "TABLES",
    },
    
]

const Categories = props => {
  
    return (
      <div className="py-16">
        <div className="section-header">What We Are Known For</div>
        <div className="grid grid-rows-5 gap-2 sm:grid-rows-1 sm:grid-cols-3 sm:gap-4">
          {categories.map(({id, img, title, feature}) => <Category key={id} image={img} title={title} feature={feature} />)}    
        </div>
      </div>
    )
    
}

export default Categories