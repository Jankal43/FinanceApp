// Header.js

import React from "react";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <header className="flex justify-around bg-gray-900 pt-3 pb-3 items-center border-b border-gray-600">
      <MdDarkMode />
      {/* <MdOutlineDarkMode /> */}
      <p className="text-xl">Expenses</p>
      <AiOutlineMenu />
    </header>
  );
}

export default Header;
