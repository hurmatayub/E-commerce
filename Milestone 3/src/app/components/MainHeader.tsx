"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <Image src="/Menu.png" alt="" width={24} height={24} />
        </div>
        <div className="text-black font-bold text-xl p-2 ml-11">CeramiLine</div>

        <div className="hidden lg:flex  gap-20 justify-center flex-1 text-[#3A3845]">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-1 ml-4">
          <div className="lg:flex ml-4 hidden sm:block">
            <Image src="/Search.png" alt="Search" width={24} height={24} />
          </div>
          <div className="lg:flex ml-4 hidden sm:block">
            <Image src="/User.png" alt="User" width={24} height={24} />
          </div>
          <div className="lg:flex ml-4 hidden sm:block">
            <Image src="/Heart.png" alt="Heart" width={24} height={24} />
          </div>

          <div className="flex space-x-4 ml-4 md:flex">
            <Image src="/Shopping cart.png" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            Shop
          </a>
          <a href="#" className="text-black">
            About
          </a>
          <a href="#" className="text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
