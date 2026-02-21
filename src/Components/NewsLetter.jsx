import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full text-center bg-gradient-to-b from-pink-200 to-white px-6 py-16 sm:py-20 md:py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Get Exclusive Offer on Your Email
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 mb-10">
        Subscribe to our Newsletter and stay updated
      </p>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-full flex items-center p-2 transition-all duration-300 hover:shadow-2xl">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 outline-none rounded-full text-sm sm:text-base focus:ring-2 focus:ring-pink-300 transition-all duration-300"
        />
        <button className="bg-black cursor-pointer text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base 
        transition-all duration-300 hover:bg-pink-500 hover:scale-105 active:scale-95">
          Subscribe
        </button>
      </div>

    </div>
  );
};

export default NewsLetter;