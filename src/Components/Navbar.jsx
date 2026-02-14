import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {

  const [category, setCategory] = useState("shop");

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Store logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold tracking-wide">ShopEase</span>
        </NavLink>

     
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {["shop", "men", "women", "kids"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                onClick={() => setCategory(item)}
                className={({ isActive }) =>
                  `transition duration-200 ease-in-out hover:text-black ${
                    isActive ? "text-black border-b-2 border-black pb-1" : ""
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

       
        <div className="flex items-center gap-5">
          <NavLink to="/login">
            <button className="px-5 py-2 border cursor-pointer border-black rounded-full hover:bg-black hover:text-white transition duration-200">
              Login
            </button>
          </NavLink>

          <NavLink to="/cart" className="relative">
            <div>
              <img
              src={cart_icon}
              alt="Cart"
              className="h-7 w-7 object-contain hover:scale-110 transition"
            />
            <div className="bg-red-500 text-white text-center text-[12px] rounded-full w-4 h-4 absolute -top-1 -right-2  ">
              0
            </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
