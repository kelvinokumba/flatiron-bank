import React, { useState, useEffect } from 'react';

// Define a functional component called TransactionList that receives props
const TransactionList = ({ transactions, searchTerm, onDeleteTransaction }) => {
  // Filter transactions based on the searchTerm
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.includes(searchTerm)
  );

  // Define a function to handle the deletion of a transaction by its ID
  const handleDelete = (id) => {
    onDeleteTransaction(id);
  };

  // Render the component's UI
  return (
    <div>
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                {/* Render a button with an onClick event handler to trigger the deletion */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList; // Export the TransactionList component for use in other parts of the application
