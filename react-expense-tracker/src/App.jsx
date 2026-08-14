import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  function addExpenses() {
    if (title.trim() != '' && amount.trim() !== '') {
      setExpenses([...expenses, { title, amount: Number(amount) }]);
    }
    setTitle('');
    setAmount('');
  }
  function removeExpense(index) {
    setExpenses(expenses.filter((_, i) => i !== index));
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
          <h1 className="text-3xl font-bold text-center mb-4">
            Expense Tracker
          </h1>

          <input
            placeholder="Write expense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Write amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={addExpenses}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition"
          >
            Add Expense
          </button>

          <h2 className="text-xl font-semibold text-center">
            Total:
            <span className="text-green-600">₹{total}</span>
          </h2>

          <div className="space-y-3">
            {expenses.map((exp, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-xl p-3 bg-gray-50"
              >
                {' '}
                <span className="font-medium text-gray-800">
                  {exp.title} - ₹{exp.amount}
                </span>
                <button
                  onClick={() => removeExpense(index)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
