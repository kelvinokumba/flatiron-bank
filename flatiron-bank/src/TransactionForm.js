import { useState } from "react";

// Define a functional component called TransactionForm that receives a prop 'onAddTransaction'
function TransactionForm({ onAddTransaction }) {
    // Define state variables for form inputs
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    // Define a function to format the current date as 'YYYY-MM-DD'
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new transaction object with user inputs and a unique 'id'
        const newTransaction = {
            id: Date.now(),
            date: formatDate(new Date()),
            description: description,
            amount: amount,
            category: category
        };
        // Call the 'onAddTransaction' function passed as a prop, passing in the new transaction
        onAddTransaction(newTransaction);
        // Clear form inputs after submission
        setDescription('');
        setAmount(0);
        setCategory('');
    };

    // Render the component's UI
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                required
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm; // Export the TransactionForm component for use in other parts of the application
