import React, { useState } from "react";

import { IoAddCircleSharp } from "react-icons/io5";
function Footer(props) {


  return (
    <footer className="flex justify-around bg-gray-900 h-10 items-center ">
    
    <button onClick={() => props.setShowCreateArea(true)} ><IoAddCircleSharp/> </button>

    </footer>
  );
}

export default Footer;
