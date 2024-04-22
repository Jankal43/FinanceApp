import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Spend from "./Spend";
import CreateArea from "./CreateArea";
// import { useMediaQuery } from 'react-responsive';

function App() {

  const [spendsList, setSpendsList] = useState([{
    inputPrice: "",
    inputDate: "",
    emoji: ""
  }]);

  const [showCreateArea, setShowCreateArea] = useState(false);

  function addSpend(newSpend) {
    setSpendsList((prevSpends) => [
      ...prevSpends,
      {
        inputPrice: newSpend.moneySpend,
        inputDate: newSpend.todaysDate,
        emoji: newSpend.emoji,
        description: newSpend.description
      },
    ]);
    // console.log(spendsList)

  }

  function deleteSpend(id) {
    setSpendsList((prevSpends) => {
      return prevSpends.filter((spend, index) => {
        return index !== id;
      });
    });
  }

  return (
    // <div className="bg-black min-h-screen">
      <div className="App text-white min-h-screen relative flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-800">  
        <h1>Spent This Month:</h1>
        {spendsList.map((spend, index) => (
          <Spend id={index} key={index} price={spend.inputPrice} date={spend.inputDate} deleteSpend={deleteSpend} emoji={spend.emoji} description={spend.description}/>
        ))}
      </div>
      {showCreateArea && <CreateArea setShowCreateArea={setShowCreateArea} addSpend={addSpend}/>}
      <Footer className="fixed bottom-0 left-0 right-0" setShowCreateArea={setShowCreateArea} />
    </div>
  // </div>
  );
}

export default App;
