import React, { useEffect, useState } from "react";
import api from "../services/api";

function ExpenseList({ token }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await api.get("/expenses", {
        headers: { Authorization: token },
      });
      setExpenses(res.data);
    };
    fetchExpenses();
  }, [token]);

  return (
    <div>
      <h3>All Expenses</h3>
      <ul>
        {expenses.map((exp) => (
          <li key={exp._id}>
            {exp.amount} - {exp.category} - {exp.description} (
            {new Date(exp.date).toDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
