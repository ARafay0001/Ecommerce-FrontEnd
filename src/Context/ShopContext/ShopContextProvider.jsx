import React from 'react'
import allProducts from "../../Assets/all_product"
import ShopContext from './ShopContext'
const ShopContextProvider = (props) => {
  
    const contextValue = {allProducts}
  
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
