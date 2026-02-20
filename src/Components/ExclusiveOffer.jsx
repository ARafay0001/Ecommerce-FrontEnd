import React from 'react'
import exclusiveImage from "../Assets/exclusive_image.png"
const ExclusiveOffer = () => {
  return (
    <div className=' m-3 bg-linear-to-b from-pink-200 to-white'>
     <div className='m-auto flex justify-between items-center max-w-300' >
       <div className='w-[40%] p-[10%]  pr-0'>
        <h1  className='text-4xl font-bold '>
            Exclusive
        </h1>
        <h1 className='text-4xl font-bold '>Offer For You</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button className="bg-red-500 cursor-pointer text-white font-bold flex items-center gap-2 px-6 md:px-8 py-3 mt-6 rounded-full transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-xl active:scale-95">
            Latest Collection
        </button>
      </div>
      <div className='pr-[10%]'> 
        <img src={exclusiveImage} alt="exclusiveImage" />
      </div>
     </div>
    </div>
  )
}

export default ExclusiveOffer
