import React from "react";
// import { FaHouseUser } from "react-icons/fa";
import './spend.css';


function Spend(props) {
  if (!props.emoji && !props.description && !props.date && !props.price) {
    return null;
  }

  return (
    <div className="mr-5 ml-5">
        <div className="DateAndPrice text-stone-400">
          {props.date && <div className="Date">{props.date}</div>}
          {props.price && <div className="Price">{props.price}.00 $</div>}
        </div>

       <div className="SpendContainer">
          <div className="Content">
            <div className="EmojiAndDescription">
              {props.emoji && <div className="Emoji">{props.emoji}</div>}
                <div className="DescriptionAndDate">
                  {props.description && <div className="Description font-bold">{props.description}</div>}
                  {props.date && <div className="Date2 text-stone-400">{props.date}</div>}
                </div>
            </div>
            
          <div className="PriceDelete items-end">  
            {props.price && <div className="Price2 text-red-500">-$ {props.price}.00</div>}
          <div className="w-100">  
            <button
            onClick={() => {props.deleteSpend(props.id);}} 
            className="bg-red-500 hover:bg-red-700 text-white rounded text-xs p-1 mt-1 "
          >
            DELETE
          </button>
        </div>
        </div>
          </div>
      
      </div>    
    </div>
  );
}



export default Spend;