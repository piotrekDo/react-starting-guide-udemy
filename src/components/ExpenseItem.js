import React from 'react';
import Card from './Card';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
