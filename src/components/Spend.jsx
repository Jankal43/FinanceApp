import React from "react";
import { FaHouseUser } from "react-icons/fa";
import './spend.css';


function Spend(props) {
  
  return (
    <div className="border rounded p-4 m-10">
        <div className="Icon"><FaHouseUser /> </div>
        <div className="Tag">House </div>
        <div className="Date">{props.date}</div>
        <div className="Price">{props.price} </div>
        <button
        onClick={() => {
          props.deleteSpend(props.id);
        }}
      >
        DELETE
      </button>
    </div>
    
  );
}

export default Spend;