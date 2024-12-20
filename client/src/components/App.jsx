import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import Spend from "./Spend";
import CreateArea from "./CreateArea";

function App() {
  const [spendsList, setSpendsList] = useState([]);
  const [showCreateArea, setShowCreateArea] = useState(false);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/expenses');
        const expenses = response.data.expenses;
        console.log('Fetched expenses:', expenses);
        setSpendsList(expenses);
        const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.price), 0);
        setTotalSpend(total);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);
  

  // useEffect(() => {
  //   console.log("Updated spendsList:", spendsList);
  // }, [spendsList]);

  function addSpend(newSpend) {
    setSpendsList((prevSpends) => [
      ...prevSpends,
      {
        price: newSpend.moneySpend,
        date: newSpend.todaysDate,
        emoji: newSpend.emoji,
        description: newSpend.description
      },
    ]);

    // Update total spend
    setTotalSpend(prevTotal => prevTotal + parseFloat(newSpend.moneySpend));
  }

  const deleteSpend = async (id) => {
    try {
        console.log("id", id)
      await axios.delete(`http://localhost:8080/expenses/${id}`);
        setSpendsList((prevSpends) => prevSpends.filter((spend) => spend._id !== id));
        const deletedSpend = spendsList.find((spend) => spend._id === id);
        if (deletedSpend) {
            setTotalSpend(prevTotal => prevTotal - parseFloat(deletedSpend.price));
        }
    } catch (error) {
        console.error('Error deleting expense:', error);
    }
};

  return (
    <div className="App text-black dark:text-white min-h-screen relative flex flex-col items-center">
      <Header />
      <div className="flex-grow bg-white dark:bg-gray-800 text-center ">
        <div className="pb-10 mb-14">
        <h1 className="text-1xl mt-10 ">Spent This Month</h1>
        <div className="text-7xl mt-2 text-red-500 font-semibold">-{totalSpend.toFixed(2)}$</div>
        </div>
        <hr  className="border-black dark:border-gray-500"/>
        {spendsList.length > 0 ? (
  spendsList.map((spend, index) => {
    console.log('Rendering spend with _id:', spend._id);
    return (
        <Spend
        id={spend._id} // Use spend._id as the key
        key={spend._id}
        price={spend.price}
        date={spend.date}
        deleteSpend={() => deleteSpend(spend._id)} // Pass function to delete specific spend
        emoji={spend.emoji}
        description={spend.description}
      />
    );
  })
) : (
  <p>No expenses found.</p>
)}
      </div>
      {showCreateArea && <CreateArea setShowCreateArea={setShowCreateArea} addSpend={addSpend} />}
      <Footer className="fixed bottom-0 left-0 right-0 z-10" setShowCreateArea={setShowCreateArea} />
    </div>
  );
}

export default App;
