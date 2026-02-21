import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import ExclusiveOffer from '../Components/ExclusiveOffer'
import NewCollections from '../Components/NewCollection'
import NewsLetter from '../Components/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <ExclusiveOffer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
