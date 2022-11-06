import React from 'react';
import './ExpenseItemDate.css'

export default function ExpenseItemDate(props) {
  const month = props.date.toLocaleString('pl-PL', { month: 'long' });
  const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
