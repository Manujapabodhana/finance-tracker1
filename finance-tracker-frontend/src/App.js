import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      <Navbar setToken={setToken} />
      <div className="container">
        <h1>💰 Personal Finance Tracker</h1>

        {!token ? (
          <p>Please login to continue.</p>
        ) : (
          <>
            <IncomeForm token={token} />
            <IncomeList token={token} />
            <ExpenseForm token={token} />
            <ExpenseList token={token} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
