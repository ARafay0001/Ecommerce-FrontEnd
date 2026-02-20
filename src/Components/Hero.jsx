import React from "react";
import HeroImage from "../Assets/hero_image.png";
import HandShake from "../Assets/hand_icon.png";
import Arrow from "../Assets/arrow.png";

const Hero = () => {

  return (
    <div className=" bg-linear-to-b from-pink-200 to-white px-6 md:px-0 py-10 md:py-0 overflow-hidden">
      <div className="m-auto max-w-350 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-[10%] items-start sm:text-left md:text-left">
        <p className="font-bold text-sm md:text-base tracking-wide">
          NEW ARRIVAL'S ONLY!
        </p>
        <h1
          className="font-bold leading-tight mt-2
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          new
          <img
            className="inline w-10 sm:w-12 md:w-16 ml-2 animate-bounce"
            src={HandShake}
            alt="HandShake"/>
          <br />
          collection <br />
          for everyone
        </h1>
        <button className="bg-red-500 cursor-pointer text-white font-bold flex items-center gap-2 px-6 md:px-8 py-3 mt-6 rounded-full transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-xl active:scale-95">
          Latest Collection
          <img className="w-4 h-3 transition-transform duration-300 group-hover:translate-x-1"
            src={Arrow}
            alt="Arrow"/>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <img className="w-3/4 md:w-[70%] transition-transform duration-500 hover:scale-105 hover:rotate-1"
          src={HeroImage}
          alt="HeroImage"/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
