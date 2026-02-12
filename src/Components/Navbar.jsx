import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Store logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold tracking-wide">ShopEase</span>
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {["shop", "men", "women", "kids"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `transition duration-200 hover:text-black ${
                    isActive ? "text-black border-b-2 border-black pb-1" : ""
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <NavLink to="/login">
            <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-200">
              Login
            </button>
          </NavLink>

          <NavLink to="/cart" className="relative">
            <img
              src={cart_icon}
              alt="Cart"
              className="h-7 w-7 object-contain hover:scale-110 transition"
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
