
'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div  className=" flex justify-center "><h1> <span className=" sm:text-[33px] text-white  text-[44px]">Code </span> <span className=" text-[44px] sm:text-[33px] text-green-400">Solution</span> </h1></div>

        {/* Dropdown Menu */}
     
      </div>
    </nav>
  );
};

export default Navbar;

