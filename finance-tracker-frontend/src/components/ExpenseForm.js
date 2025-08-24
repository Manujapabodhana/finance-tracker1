import React, { useState } from "react";
import api from "../services/api";

function ExpenseForm({ token }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/expenses",
        { amount, category, description },
        { headers: { Authorization: token } }
      );
      alert("Expense added!");
      setAmount("");
      setCategory("");
      setDescription("");
    } catch (error) {
      alert("Failed to add expense");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
