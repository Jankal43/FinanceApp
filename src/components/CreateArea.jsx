import React, { useEffect, useState } from "react";
import SelectTag from "./SelectTag";

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
    emoji: "Select a tag",
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
      <div>
        <p>Todays date: {formattedDate}</p>
        <input 
          className="text-black" 
          name="moneySpend" 
          onChange={handleChange} 
          onKeyPress={handleKeyPress} 
          placeholder="0" 
          value={spends.moneySpend} 
        />
        
        <button onClick={()=>{setShowSelectTag(true)}}> 
          {spends.emoji}
        </button>
        
        <button className="bg-blsue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={()=>{
              console.log(spends)
              props.addSpend(spends);
              props.setShowCreateArea(false);
              handleSubmit();
            }}>
        
            Add
        
        </button>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={()=> props.setShowCreateArea(false)}
        >
          Cancel
        </button>

        {/* {showSelectTag && <SelectTag setShowSelectTag={setShowSelectTag} setTagSelected={setTagSelected}/>} */}
        {showSelectTag && <SelectTag setShowSelectTag={setShowSelectTag} setSpends={setSpends}/>}

      </div>
    </div>
  );
}

export default CreateArea;
