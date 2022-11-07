
import Card from './components/UI/Card';
import './components/expenses/Expenses.css';
import ExpenseItem from './components/expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expensesData, addExpense] = useState(expenses);

  const addNewExpenseHandler = (newExpense) => {
      console.log(newExpense)
      addExpense(expensesData.push(newExpense));
  }

  return (
    <Card className="expenses">
      <NewExpense onNewExpenseAdded={addNewExpenseHandler}/>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            name={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default App;
