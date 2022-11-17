import React, { useState } from 'react';
import NewExpense from '../NewExpense/NewExpense';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export default function Expenses(props) {
  const [filteredYear, changeYear] = useState('ALL');

  const addNewExpenseHandler = (newExpense) => {
    props.onAddExpense(newExpense);
  };

  const onFilteredYearChanged = (year) => {
    changeYear(year);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return filteredYear === 'ALL'
      ? exp
      : exp.date.getFullYear() === +filteredYear;
  });


  return (
    <Card className="expenses">
      <NewExpense onNewExpenseAdded={addNewExpenseHandler} />
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilteredYearChanged={onFilteredYearChanged}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
