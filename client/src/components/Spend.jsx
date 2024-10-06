import React from "react";
import './spend.css';

function Spend(props) {


  if (!props.emoji && !props.description && !props.date && !props.price) {
    return null;
  }

  return (
    <div className="SpendContainer">
      <div className="Content">
        <div className="EmojiAndDescription">
          {props.emoji && <div className="Emoji">{props.emoji}</div>}
          <div className="DescriptionAndDate">
            {props.description && <div className="Description font-bold text-left">{props.description}</div>}
            {props.date && <div className="Date2 text-stone-400 text-left">{props.date}</div>}
          </div>
        </div>
        <div className="PriceDelete items-end">
          {props.price && <div className="Price2 text-red-500 font-semibold">-$ {parseFloat(props.price).toFixed(2)}</div>}
          <div className="w-100">
            <button
              onClick={() => { props.deleteSpend(props.id); }}
              className="border border-gray-500 hover:bg-red-700 text-gray-300 hover:text-white hover:border-white rounded text-xs p-1 mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spend;
