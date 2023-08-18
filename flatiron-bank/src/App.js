import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);



   
      useEffect (() =>{
        //fetch from localhost endpoint
        fetch('http://localhost:8001/transactions')
        .then((response) => response.json())
        .then(data => setTransactions(data))
    },[]
    );

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    }

  return (
    <div className="App">
      <TransactionList transactions = {transactions}/>
      
      <TransactionForm onAddTransaction={addTransaction}/>

    </div>
  );
}

export default App;
