import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext/ShopContext'
import dropDownIcon from "../Assets/dropdown_icon.png"
import Item from "../Components/Item"

const Categories = (props) => {
  const { allProducts } = useContext(ShopContext)

  return (
    <div className='px-[10%] my-6'>
      
      {/* Banner */}
      <img 
        src={props.banner} 
        alt="category-banner" 
        className='w-full rounded-xl mb-8'
      />

      {/* Header Section */}
      <div className='flex justify-between items-center mb-6'>
        <p className='text-gray-600'>
          <span className='font-semibold'>
            Showing 1–12
          </span>
        </p>

        <div className='flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-lg hover:shadow-md transition'>
          Sort by
          <img 
            src={dropDownIcon} 
            alt="dropdown" 
            className='w-4'
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className='flex gap-4 flex-wrap justify-center'>
        {allProducts.map((product) => {
          if (product.category === props.category) {
            return (
              <Item
                key={product.id}
                image={product.image}
                name={product.name}
                brand={product.brand}
                newPrice={product.new_price}
                oldPrice={product.old_price}
              />
            )
          } else {
            return null
          }
        })}
      </div>

    </div>
  )
}

export default Categories