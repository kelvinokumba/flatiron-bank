import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


   
      useEffect (() =>{
        //fetch from localhost endpoint
        fetch('http://localhost:8001/transactions')
        .then((response) => response.json())
        .then(data => setTransactions(data))
    },[]
    );

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };

    const deleteTransaction = (id) => {
      const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
      setTransactions(updatedTransactions);
    }

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionList 
      transactions={transactions} 
      searchTerm={searchTerm} 
      onDeleteTransaction={deleteTransaction} 
      />
    </div>
  );
}

export default App;
