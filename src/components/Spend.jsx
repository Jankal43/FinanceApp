import React from "react";
// import { FaHouseUser } from "react-icons/fa";
import './spend.css';


function Spend(props) {
  if (!props.emoji && !props.description && !props.date && !props.price) {
    return null;
  }

  return (
    <div className="border rounded p-4 m-10">
      {props.emoji && <div className="Emoji">{props.emoji}</div>}
      {props.description && <div className="Description">{props.description}</div>}
      {props.date && <div className="Date">{props.date}</div>}
      {props.price && <div className="Price">{props.price} pln</div>}
    
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