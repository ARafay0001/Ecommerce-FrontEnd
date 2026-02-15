import React from 'react'
import data from "../Assets/data"
import Item from "./Item.jsx"

const Popular = () => {
  return (
    <div className='px-[10%] mt-6'>
        <h1 className='font-bold my-6 text-3xl '>
            Popular In WOMEN 
        </h1>
      <div className='flex gap-4 flex-wrap lg:flex-nowrap justify-center  '>
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

export default Popular
