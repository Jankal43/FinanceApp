import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";


function Header() {
  return (
    <header className="flex justify-around bg-gray-900 h-10 items-center">
      
        <MdDarkMode />
        {/* <MdOutlineDarkMode /> */}
        <p>Expenses</p>
        <AiOutlineMenu />
    </header>
  );
}

export default Header;