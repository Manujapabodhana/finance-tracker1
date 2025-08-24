import React, { useState } from "react";
import api from "../services/api";

function IncomeForm({ token }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/incomes",
        { amount, description },
        { headers: { Authorization: token } }
      );
      alert("Income added!");
      setAmount("");
      setDescription("");
    } catch (error) {
      alert("Failed to add income");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Income</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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

export default IncomeForm;
