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

  // Fetch expenses from API
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/expenses');
        const expenses = response.data.expenses; // Używaj klucza 'expenses'
        console.log('Fetched expenses:', expenses); // Loguj pobrane dane
        setSpendsList(expenses);

        // Oblicz całkowite wydatki
        const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.price), 0);
        setTotalSpend(total);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  // Log updated spendsList whenever it changes
  // useEffect(() => {
  //   console.log("Updated spendsList:", spendsList);
  // }, [spendsList]);

  // Add a new spend
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

  // Delete a spend
  function deleteSpend(id) {
    setSpendsList((prevSpends) => {
      return prevSpends.filter((spend, index) => index !== id);
    });

    // Note: Adjust totalSpend if necessary based on deleted spend's price
  }

  return (
    <div className="App text-white min-h-screen relative flex flex-col items-center">
      <Header />
      <div className="flex-grow bg-gray-800 text-center ">
        <h1 className="text-1xl mt-10 ">Total Spend</h1>
        <div className="text-7xl mt-2 text-red-500">-{totalSpend.toFixed(2)}$</div>
        {spendsList.length > 0 ? (
          spendsList.map((spend, index) => (
            <Spend
              id={index}
              key={index}
              price={spend.price}
              date={spend.date}
              deleteSpend={deleteSpend}
              emoji={spend.emoji}
              description={spend.description}
            />
          ))
        ) : (
          <p>No expenses found.</p>
        )}
      </div>
      {showCreateArea && <CreateArea setShowCreateArea={setShowCreateArea} addSpend={addSpend} />}
      <Footer className="fixed bottom-0 left-0 right-0" setShowCreateArea={setShowCreateArea} />
    </div>
  );
}

export default App;
