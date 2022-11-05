import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <div className='expense-item__description'>
        <h2>Car insurance</h2>
        <div className='expense-item__price'>432.43</div>
      </div>
    </div>
  );
}
