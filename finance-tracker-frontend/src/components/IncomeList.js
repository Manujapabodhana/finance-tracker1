import React, { useEffect, useState } from "react";
import api from "../services/api";

function IncomeList({ token }) {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      const res = await api.get("/incomes", {
        headers: { Authorization: token },
      });
      setIncomes(res.data);
    };
    fetchIncomes();
  }, [token]);

  return (
    <div>
      <h3>All Incomes</h3>
      <ul>
        {incomes.map((inc) => (
          <li key={inc._id}>
            {inc.amount} - {inc.description} ({new Date(inc.date).toDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;
