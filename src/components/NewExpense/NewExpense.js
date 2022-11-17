import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const onShowFormHandler = () => {
    setShowForm((prev) => !prev);
  }

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString()
    };
    props.onNewExpenseAdded(expenseData);
    onShowFormHandler();
  }

  return (
    <div className='new-expense'>
      {!showForm &&<button onClick={onShowFormHandler}>Add new expense</button>}
      {showForm && <ExpenseForm onCancel={onShowFormHandler} onSaveExpenseData={onSaveExpenseDataHandler}/>}
    </div>
  )
}
