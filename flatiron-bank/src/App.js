// Import necessary modules and components from React and other files
import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  // Define state variables using the useState hook
  const [transactions, setTransactions] = useState([]); // To store a list of transactions
  const [searchTerm, setSearchTerm] = useState(''); // To store the search term for filtering transactions

  // Use the useEffect hook to fetch data from a local endpoint when the component mounts
  useEffect(() => {
    // Fetch data from a local endpoint (http://localhost:8001/transactions)
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then(data => setTransactions(data)); // Update the 'transactions' state with fetched data
  }, []); // The empty dependency array ensures this effect runs only once, on component mount

  // Define a function to add a new transaction to the 'transactions' state
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]); // Append 'newTransaction' to the existing list
  };

  // Define a function to delete a transaction from the 'transactions' state by its 'id'
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    // Create a new array excluding the transaction with the specified 'id'
    setTransactions(updatedTransactions); // Update the 'transactions' state with the filtered array
  }

  // Render the component's UI
  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={addTransaction} /> {/* Render a form for adding transactions */}
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update 'searchTerm' as the user types
      />
      <TransactionList 
        transactions={transactions} // Pass the list of transactions as a prop
        searchTerm={searchTerm} // Pass the search term as a prop
        onDeleteTransaction={deleteTransaction} // Pass the deleteTransaction function as a prop
      />
    </div>
  );
}

export default App;
