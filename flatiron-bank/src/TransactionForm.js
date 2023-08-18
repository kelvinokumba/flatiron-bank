import { useState } from "react";

function TransactionForm({onAddTransaction}) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            date: formatDate(new Date()),
            description: description,
            amount: amount,
            category: category
        };
        onAddTransaction(newTransaction);
        setDescription('');
        setAmount(0);
        setCategory('')

        
          

    };


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
           placeholder="category"
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           required 
           />
           <button type="submit">Add Transaction</button>

        </form>
    )

}

export default TransactionForm

