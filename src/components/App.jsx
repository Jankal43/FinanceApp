import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Spend from "./Spend";
import CreateArea from "./CreateArea";


function App() {

  const [spendsList, setSpendsList] = useState([{
    inputPrice: "",
    inputDate: ""
  }]);

  const [showCreateArea, setShowCreateArea] = useState(false);


  function addSpend(newSpend) {
    setSpendsList((prevSpends) => [
      ...prevSpends,
      {
        inputPrice: newSpend.moneySpend,
        inputDate: newSpend.todaysDate
      },
    ]);
    console.log(spendsList)

  }

  function deleteSpend(id) {
    setSpendsList((prevSpends) => {
      return prevSpends.filter((spend, index) => {
        return index !== id;
      });
    });
  }




  return (
    
    
    <div className="App text-white">
    
      <Header />
      
      <div className="flex flex-col min-h-screen text-white">
        <div className="flex-grow bg-gray-800">  
          <h1>Spent This Month:</h1>
          
          {spendsList.map((spend, index) => (
            <Spend id={index} key={index} price={spend.inputPrice} date={spend.inputDate} deleteSpend={deleteSpend} />
          ))}
        
        </div>
      </div>

      {showCreateArea && <CreateArea  setShowCreateArea={setShowCreateArea} addSpend={addSpend}/>}
      <Footer setShowCreateArea={setShowCreateArea} />

      
    </div>
  );
}

export default App;
