// Footer.js

import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import PlusButton from "./PlusButton";

function Footer(props) {
  return (
    <footer className="flex justify-around bg-gray-900 h-20 items-center fixed bottom-0 left-0 right-0 border-t border-gray-600">
        <button onClick={() => props.setShowCreateArea(true)}>
           <PlusButton />
        </button>
    </footer>
  );
}

export default Footer;
