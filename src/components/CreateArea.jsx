import React, { useState } from "react";
import SelectTag from "./SelectTag";

function CreateArea(props) {
  


 
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;



  
  const [spends, setSpends] = useState({
    moneySpend: "",
    todaysDate: formattedDate,
  });

  const [showSelectTag, setShowSelectTag] = useState(false);

  const [tagSelected, setTagSelected] = useState({
    tagSelected: ""
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
  // {while(1){
  //   console.log(tagSelected)
  // }}

  

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
          {tagSelected==="" ? tagSelected : "SelectTag"}
        </button>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={()=>{
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

        {showSelectTag && <SelectTag setShowSelectTag={setShowSelectTag} setTagSelected={setTagSelected}/>}

      </div>
    </div>
  );
}

export default CreateArea;
