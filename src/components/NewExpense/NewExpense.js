import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString()
    };
    props.onNewExpenseAdded(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  )
}
