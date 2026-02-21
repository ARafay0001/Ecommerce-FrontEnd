import React from "react";

const Item = ({ image, name, brand, newPrice, oldPrice }) => {
  return (
    <div className="group cursor-pointer max-w-2xs bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden w-full ">

      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="bg-linear-to-b from-pink-200 to-white p-4 space-y-2">

        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {brand}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-3 pt-2">
          <span className="text-xl font-bold text-black">
            ${newPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
