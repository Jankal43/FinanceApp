import React, { useEffect, useState } from "react";
import SelectTag from "./SelectTag";
import './createArea.css';
import { FaArrowRotateLeft } from "react-icons/fa6";
function CreateArea(props) {
  


 
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;


  // const [tagSelected, setTagSelected] = useState("Select a tag");
  const [showSelectTag, setShowSelectTag] = useState(false);

  const [spends, setSpends] = useState({
    moneySpend: "",
    todaysDate: formattedDate,
    emoji: "Click to select a tag",
    description: ""
  });


  const handleChange = (event) => {
    const { value, name } = event.target;
    setSpends(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit() {
    setSpends((prevState) => ({
      ...prevState,
      moneySpend: "" 
    }));
  }


  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
// useEffect(()=>{
//   // console.log(tagSelected)
// })
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="CreateAreaContainer">
        <div className="Header text-stone-400 text-sm m-5">
          <p>Todays at: {formattedDate}</p>
        </div>
        <div className="InputField pb-1">
          <input
            className="text-white text-center bg-transparent text-2xl border-b border-gray-300 outline-none" 
            name="moneySpend" 
            onChange={handleChange} 
            onKeyPress={handleKeyPress} 
            placeholder="0" 
            value={spends.moneySpend} 
          />
        </div>
        <div className="TagField p-2 text-2xl">
          <button onClick={()=>{setShowSelectTag(true)}}> 
            {spends.emoji} {spends.description}
          </button>
        </div>
        

        <div className="Buttons">
          <button className="w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl m-1"
              onClick={()=>{
                console.log(spends)
                props.addSpend(spends);
                props.setShowCreateArea(false);
                handleSubmit();
              }}>
          
              Add
          
          </button>

          <button className="w-24 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl m-1"
          onClick={()=> props.setShowCreateArea(false)}
          >
            Cancel
          </button>
        </div>
        <div className="SelectedEmoji">
        {/* {showSelectTag && <SelectTag setShowSelectTag={setShowSelectTag} setTagSelected={setTagSelected}/>} */}
        {showSelectTag && <SelectTag setShowSelectTag={setShowSelectTag} setSpends={setSpends}/>}
        </div>
      </div>
    </div>
  );
}

export default CreateArea;
