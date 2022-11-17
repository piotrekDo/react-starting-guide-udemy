import React, { useState } from 'react'
import NewExpense from '../NewExpense/NewExpense';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
    const [filteredYear, changeYear] = useState('2021');
  
    const addNewExpenseHandler = (newExpense) => {
        props.onAddExpense(newExpense);
    }
  
    const onFilteredYearChanged = (year) => {
      changeYear(year);
      console.log(filteredYear);
    }

  return (
    <Card className="expenses">
    <NewExpense onNewExpenseAdded={addNewExpenseHandler} />
    <ExpensesFilter selectedYear={filteredYear} onFilteredYearChanged={onFilteredYearChanged}/>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            name={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
  </Card>
  )
}
