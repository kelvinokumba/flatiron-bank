import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);



   
      useEffect (() =>{
        //fetch from localhost endpoint
        fetch('http://localhost:8001/transactions')
        .then((response) => response.json())
        .then(data => setTransactions(data))
    },[]
    )

  return (
    <div className="App">
      <TransactionList transactions = {transactions}/>
    </div>
  );
}

export default App;
