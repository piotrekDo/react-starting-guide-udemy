import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';

export default function ExpenseItem(props) {
  const [name, setName] = useState(props.name);
  const nameClickHandler = () => {
    setName('Updated name!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={nameClickHandler}>Change name</button>
    </Card>
  );
}
