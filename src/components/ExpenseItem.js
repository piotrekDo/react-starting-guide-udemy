import React from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseItemDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
