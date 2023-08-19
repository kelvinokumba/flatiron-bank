import React, { useState, useEffect } from 'react';

const TransactionList = ({ transactions, searchTerm, onDeleteTransaction }) => {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.includes(searchTerm)
  );

const handleDelete = (id) => {
  onDeleteTransaction(id);
};

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
                <button onClick ={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList