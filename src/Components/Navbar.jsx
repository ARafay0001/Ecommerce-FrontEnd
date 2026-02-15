import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["shop", "men", "women", "kids"];

  return (
    <header className="w-full shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
      
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Store logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold tracking-wide">ShopEase</span>
        </NavLink>
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item} className="transition-all duration-300 hover:scale-110">
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `relative transition-all duration-300 hover:text-black hover:scale-110 after:content-[''] after:absolute after:block after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
 ${
                    isActive ? "text-black after:w-full" : ""
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <NavLink to="/login" className="hidden md:block">
            <button className="px-5 py-2 border cursor-pointer border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-300 active:scale-95">
              Login
            </button>
          </NavLink>
          <NavLink to="/cart" className="relative group">
            <img
              src={cart_icon}
              alt="Cart"
              className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
            />
            <div className="bg-red-500 text-white text-[10px] flex justify-center items-center rounded-full w-4 h-4 absolute -top-1 -right-2">
              0
            </div>
          </NavLink>

          {/* HAMBURGER */}
          <button 
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen && "rotate-45 translate-y-1.5"}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen && "opacity-0"}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-1.5"}`}></span>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-60 py-4" : "max-h-0"}`}>
        
        <ul className="flex flex-col items-center gap-5 font-medium text-gray-700">

          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}

          <NavLink to="/login" onClick={() => setMenuOpen(false)}>
            <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Login
            </button>
          </NavLink>

        </ul>

      </div>

    </header>
  );
};

export default Navbar;
