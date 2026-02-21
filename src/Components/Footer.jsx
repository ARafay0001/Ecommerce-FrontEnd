import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instaIcon from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  const data = ["Company", "Product", "Offices", "About", "Contact"];

  return (
    <footer className="pt-16 pb-8 px-6 t">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src={footer_logo}
              alt="footer_logo"
              className="w-12 transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-2xl font-bold tracking-wide text-gray-800 group-hover:text-pink-500 transition duration-300">
              SHOPO
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-600">
            {data.map((li, idx) => (
              <li
                key={idx}
                className="relative cursor-pointer hover:text-gray-900 transition duration-300"
              >
                {li}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[instaIcon, whatsapp, pintester].map((icon, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm p-3 rounded-full cursor-pointer 
                transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <img src={icon} alt="social_icon" className="w-5 h-5" />
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <hr className="h-[4px] bg-gray-200 border-none mb-6 shadow-lg" />
          <p className="text-center text-gray-500 text-sm">
            © 2026 SHOPO. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;