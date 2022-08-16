import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Baby Food ",
    amount: 1000.69,
    date: new Date(2022, 3, 22),
  },
  {
    id: "e3",
    title: "Ganja",
    amount: 420.0,
    date: new Date(2022, 4, 2),
  },
  {
    id: "e4",
    title: "Beer",
    amount: 69.69,
    date: new Date(2022, 5, 26),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
