import React from 'react'
import data from "../Assets/new_collections"
import Item from "./Item.jsx"

const NewCollections = () => {
  return (
    <div className='px-[10%] my-6'>
        <h1 className='font-bold my-6 text-3xl '>
            New Collections
        </h1>
        <hr className='mb-4'/>
      <div className='flex gap-4 flex-wrap justify-center  '>
        {data.map((item, idx) => (
        <Item
          key={idx}
          image={item.image}
          name={item.name}
          brand={item.brand}
          newPrice={item.new_price}
          oldPrice={item.old_price}
        />
      ))}
      </div>
    </div>
  )
}

export default NewCollections
